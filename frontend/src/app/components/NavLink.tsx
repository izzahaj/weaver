'use client';

import { Link, LinkProps } from "@chakra-ui/next-js";
import React from "react";

const NavLink: React.FC<LinkProps> = ({ children, ...props }) => {
  const { _hover } = props;

  return (
    <Link
      {...props}
      px={2}
      py={1}
      rounded={4}
      _hover={{
        textDecoration: 'none',
        ..._hover
      }}
    >
      {children}
    </Link>
  );
};

export default NavLink;
