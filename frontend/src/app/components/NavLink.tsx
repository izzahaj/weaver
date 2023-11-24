'use client';

import { Link, LinkProps } from "@chakra-ui/next-js";
import { useColorModeValue } from "@chakra-ui/react";
import React from "react";

const NavLink: React.FC<LinkProps> = ({ children, ...otherProps }) => {
  return (
    <Link
      {...otherProps}
      px={2}
      py={1}
      rounded={4}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('maroon.700', 'maroon.700'),
      }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
