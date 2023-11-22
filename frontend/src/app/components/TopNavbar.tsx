'use client'

import { Box, Button, Flex, HStack, textDecoration, useColorModeValue } from "@chakra-ui/react";
import { Link, LinkProps } from "@chakra-ui/next-js";
import React from "react";
import { NAVBAR_HEIGHT_PX } from "../utils/constants";

const links = [
  {
    name: 'Explore',
    href: '/explore'
  },
  {
    name: 'Workspace',
    href: '/workspace'
  },
  {
    name: 'Library',
    href: '/library'
  }
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

const NavLink: React.FC<LinkProps> = ({ children, ...otherProps }) => {
  return (
    <Link
      {...otherProps}
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('maroon.700', 'maroon.700'),
      }}
    >
      {children}
    </Link>
  );
};

const TopNavbar: React.FC = () => {
  return (
    <Box as={'nav'} px={4} bgColor={'maroon.800'} color={'ivory.50'}>
      <Flex h={`${NAVBAR_HEIGHT_PX}px`} alignItems={'center'} justifyContent={'space-between'}>
        <HStack spacing={8} alignItems={'center'}>
          <Logo />
          <HStack>
            {links.map((link) => (
              <NavLink key={link.name} href={link.href} fontWeight={600} fontSize={'sm'}>
                {link.name}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={'center'}>
          <Button>
            
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TopNavbar;