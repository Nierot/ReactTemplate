import { Box, Heading } from '@chakra-ui/react'
import { useState } from 'react'
import SidebarWithHeader from './components/SidebarWithHeader'

function App() {

  return <Box>
    <SidebarWithHeader>
      <Heading as="h1" size="2xl">
        Trek Bak!
      </Heading>
    </SidebarWithHeader>
  </Box>
}

export default App
