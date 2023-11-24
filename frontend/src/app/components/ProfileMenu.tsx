import { useAuth0 } from "@auth0/auth0-react";
import { Avatar, Box, BoxProps, Button, ButtonProps, Divider, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, HStack, Icon, IconButton, Text, VStack, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import React, { useRef } from "react";
import { Link, LinkProps } from "@chakra-ui/next-js";
import { FaArrowRightFromBracket, FaBell, FaChartColumn, FaChartPie, FaClockRotateLeft, FaEnvelope, FaGear, FaLandmarkFlag, FaUser, FaXmark } from "react-icons/fa6";
import { IconType } from "react-icons";

type ProfileLink = {
  name: string;
  href: string;
  icon: IconType;
};

interface DrawerSectionProps {
  links: ProfileLink[];
};

const profileLinks: { group: string; links: ProfileLink[] }[] = [
  {
    group: 'Personal Hub',
    links: [
      {
        name: 'Profile',
        href: '/profile',
        icon: FaUser,
      },
      {
        name: 'Dashboard',
        href: '/dashboard',
        icon: FaChartColumn,
      },
    ],
  },
  {
    group: 'Communication',
    links: [
      {
        name: 'Notifications',
        href: '/notifications',
        icon: FaBell,
      },
      {
        name: 'Inbox',
        href: '/inbox',
        icon: FaEnvelope,
      },
    ],
  },
  {
    group: 'Community',
    links: [
      {
        name: 'Guilds',
        href: '/guilds',
        icon: FaLandmarkFlag,
      },
    ],
  },
  {
    group: 'Analytics',
    links: [
      {
        name: 'Statistics',
        href: '/statistics',
        icon: FaChartPie,
      },
      {
        name: 'History',
        href: '/history',
        icon: FaClockRotateLeft,
      },
    ],
  },
  {
    group: 'Settings',
    links: [
      {
        name: 'Settings',
        href: '/settings',
        icon: FaGear,
      },
    ],
  },
];


const NavLink: React.FC<LinkProps> = ({ children, ...otherProps }) => {
  return (
    <Link
      {...otherProps}
      w='100%'
      px={2}
      py={1}
      rounded={4}
      _hover={{
        textDecoration: 'none',
        color: useColorModeValue('oliveGreen.700', 'oliveGreen.700'),
        bg: useColorModeValue('oliveGreen.50', 'oliveGreen.50')
      }}
    >
      {children}
    </Link>
  )
};

const DrawerSection: React.FC<DrawerSectionProps> = ({ links }) => {
  return (
    <>
      <Divider />
      {links.map((link) => {
        const { name, href, icon } = link;
        
        return (
          <NavLink key={name} href={href}>
            <HStack spacing={4}>
              <Icon as={icon} />
              <Text fontSize="sm" fontWeight={400}>{name}</Text>
            </HStack>
          </NavLink>
        );
    })}
    </>
  )
};

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <HStack
      as={Button}
      size={'sm'}
      rounded={4}
      spacing={4}
      colorScheme={'oliveGreen'}
      w='100%'
      justifyContent={'flex-start'}
      _hover={{
        color: useColorModeValue('oliveGreen.700', 'oliveGreen.700'),
        bg: useColorModeValue('oliveGreen.50', 'oliveGreen.50')
      }}
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
    >
      <Icon as={FaArrowRightFromBracket} />
      <Text fontSize="sm" fontWeight={400}>Log out</Text>
    </HStack>
  );
};

const ProfileMenu: React.FC<ButtonProps> = (props) => {
  const { user } = useAuth0();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);

  return (
    <>
      <Button {...props} ref={btnRef} variant='link' onClick={onOpen}>
        <Avatar
          name={user?.name}
          size='sm'
          src={user?.picture}
          _hover={{ border: '1px solid', borderColor: 'maroon.700' }}
        />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent rounded={6} bgColor={'oliveGreen.700'} color={'ivory.50'}>
          <DrawerHeader>
            <HStack alignItems={'center'} justifyContent={'space-between'}>
              <HStack spacing={2} alignItems={'center'}>
                <Avatar name={user?.name} size='sm' src={user?.picture} />
                <Text fontSize="sm">{user?.name || "default_user"}</Text>
              </HStack>
              <IconButton
                size="sm"
                colorScheme={'oliveGreen'}
                aria-label="Close profile menu"
                icon={<Icon as={FaXmark} boxSize={5} />}
                onClick={onClose}
              />
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <VStack>
              {profileLinks.map((item) => (
                <DrawerSection key={item.group} links={item.links} />
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <VStack w='100%'>
              <Divider />
              <LogoutButton />
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ProfileMenu;
