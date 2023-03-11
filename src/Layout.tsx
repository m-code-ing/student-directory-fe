import { Box, Container } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import SearchAppBar from './components/AppBar'
import SimpleBottomNavigation from './components/BottomNavigation'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: '100vh',
        width: '400px',
        border: '1px solid black',
      }}
    >
      <Box height="100%" display="flex" flexDirection="column">
        <SearchAppBar />
        <Box flex={1}>{children}</Box>
        <SimpleBottomNavigation />
      </Box>
    </Container>
  )
}

export default Layout
