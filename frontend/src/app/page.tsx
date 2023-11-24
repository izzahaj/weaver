import { Box } from '@chakra-ui/react'
import TopNavbar from './components/TopNavbar'
import BottomNavbar from './components/BottomNavbar'
import { NAVBAR_HEIGHT_PX } from './utils/constants'

export default function Home() {
  return (
    <Box position={'fixed'} w='100%' h='100vh' overflow={'hidden'}>
      <TopNavbar />
      <Box
        as='main'
        h={[`calc(100vh - ${2 * NAVBAR_HEIGHT_PX}px)`, `calc(100vh - ${NAVBAR_HEIGHT_PX}px)`]}
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
      <BottomNavbar />
    </Box>
  )
}
