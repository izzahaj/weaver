'use client';

import { Avatar, Box, HStack, Icon, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import { NAVBAR_HEIGHT_PX } from "../utils/constants";
import { FaCompass, FaHouse, FaToolbox } from "react-icons/fa6";
import { IoLibrary } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import NavLink from "./NavLink";

const links = [
  {
    name: 'Home',
    href: '/',
    icon: FaHouse
  },
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

const BottomNavbar: React.FC = () => {
  const { user } = useAuth0();

  return (
    <Box hideFrom="sm" as='nav' px={4} bgColor={'maroon.800'} color={'ivory.50'}>
      <HStack h={`${NAVBAR_HEIGHT_PX}px`} alignItems={'center'} justifyContent='space-evenly'>
        {links.map((link) => (
          <NavLink 
            key={link.name}
            href={link.href}
            _hover={{ bg: useColorModeValue('maroon.700', 'maroon.700') }}
          >
            <VStack spacing={1}>
              <Icon as={link.icon} boxSize={5} />
              <Text fontSize={'3xs'} fontWeight={600}>{link.name}</Text>
            </VStack>
          </NavLink>
        ))}
        <NavLink href={'/profile'} _hover={{ bg: useColorModeValue('maroon.700', 'maroon.700') }}>
          <Avatar
            name={user?.name}
            size='sm'
            src={user?.picture}
            _hover={{ border: '1px solid', borderColor: 'maroon.700' }}
          />
        </NavLink>
      </HStack>
    </Box>
  );
};

export default BottomNavbar;
