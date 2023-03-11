import { Box, Container } from '@mui/material'
import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{ height: '100vh', backgroundColor: { xs: '#fff', md: '#f4f4f4' } }}
    >
      <Box display="flex" justifyContent="center">
        <Box width={400}>{children}</Box>
      </Box>
    </Container>
  )
}

export default Layout
