'use client'

import { Box } from '@chakra-ui/react'
import TopNavbar from './components/TopNavbar'
import BottomNavbar from './components/BottomNavbar'
import { NAVBAR_HEIGHT_PX } from './utils/constants'
import { useAuth0 } from '@auth0/auth0-react'

export default function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    <Box position={'fixed'} w='100%' h='100vh' overflow={'hidden'}>
      <TopNavbar />
      <Box
        as='main'
        h={[
          `calc(100vh - ${(isAuthenticated ? 2 : 1) * NAVBAR_HEIGHT_PX}px)`,
          `calc(100vh - ${NAVBAR_HEIGHT_PX}px)`
        ]}
        overflow={'scroll'}
        px={[4, 4, 12, 20, 24]}
      >
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
        <Box>
          Hello
        </Box>
      </Box>
      {isAuthenticated && <BottomNavbar hideFrom='sm' />}
    </Box>
  )
}
