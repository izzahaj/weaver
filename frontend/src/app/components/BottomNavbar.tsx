import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { NAVBAR_HEIGHT_PX } from "../utils/constants";

const BottomNavbar: React.FC = () => {
  return (
    <Box as='nav' bgColor={'maroon.800'} color={'ivory.50'}>
      <Flex h={`${NAVBAR_HEIGHT_PX}px`} alignItems={'center'} justifyContent={'space-between'}>
        Something
      </Flex>
    </Box>
  );
};

export default BottomNavbar;
