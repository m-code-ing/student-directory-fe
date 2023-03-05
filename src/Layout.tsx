import { Box } from '@mui/material'
import React, { PropsWithChildren } from 'react'

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box maxWidth={400}>{children}</Box>
    </Box>
  )
}

export default Layout
