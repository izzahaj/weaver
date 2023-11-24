'use client'

import { Box, HStack, Icon, IconButton, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import { NAVBAR_HEIGHT_PX } from "../utils/constants";
import ProfileMenu from "./ProfileMenu";
import { FaBell, FaCompass, FaEnvelope, FaToolbox } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import NavSearchBar from "./NavSearchBar";
import NavLink from "./NavLink";

const links = [
  {
    name: 'Library',
    href: '/library',
    icon: IoLibrary
  },
  {
    name: 'Explore',
    href: '/explore',
    icon: FaCompass
  },
  {
    name: 'Workspace',
    href: '/workspace',
    icon: FaToolbox
  },
];

const Logo: React.FC = () => {
  return (
    <Link
      href='/'
      fontWeight={700}
      fontSize='xl'
      _hover={{ textDecoration: 'none' }}
    >
      Logo
    </Link>
  );
};

const TopNavbar: React.FC = () => {
  return (
    <Box as={'nav'} px={[4, 4, 12, 20, 24]} bgColor={'maroon.800'} color={'ivory.50'}>
      <HStack h={`${NAVBAR_HEIGHT_PX}px`} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={[2, 2, 8]} alignItems={'center'}>
          <Logo />
          <HStack hideBelow={'lg'}>
            {links.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                fontWeight={600}
                fontSize={'sm'}
                _hover={{ bg: useColorModeValue('maroon.700', 'maroon.700') }}
              >
                {link.name}
              </NavLink>
            ))}
          </HStack>
          <HStack spacing={0} hideBelow='sm' hideFrom='lg'>
            {links.map((link) => (
              <NavLink
                key={link.name}
                href={link.href}
                _hover={{ bg: useColorModeValue('maroon.700', 'maroon.700') }}
              >
                <VStack spacing={1}>
                  <Icon as={link.icon} boxSize={[5, 5, 4]}/>
                  <Text fontSize={['3xs', '3xs', '2xs']} fontWeight={600}>{link.name}</Text>
                </VStack>
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <HStack
          spacing={1}
          alignItems={'center'}
          flexGrow={1}
          justifyContent={'flex-end'}
          maxW={[null, 450, 550]}
        >
          <NavSearchBar hideBelow='sm' />
          <IconButton
            display={{ base: "block", sm: "none", md: "block" }}
            size="sm"
            colorScheme="maroon"
            aria-label="View recent notifications"
            icon={<Icon as={FaBell} boxSize={5} />}
          />
          <IconButton
            display={{ base: "block", sm: "none", md: "block" }}
            size="sm"
            colorScheme="maroon"
            aria-label="View recent notifications"
            icon={<Icon as={FaEnvelope} boxSize={5} />}
          />
          <ProfileMenu hideBelow="sm" />
        </HStack>
      </HStack>
    </Box>
  );
};

export default TopNavbar;
