import { createTheme } from '@mui/material'
import { deepPurple } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      bg: {
        dark: string
      }
    }
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    custom: {
      bg: {
        dark: string
      }
    }
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: '#f48fb1',
    },
    custom: {
      bg: {
        dark: deepPurple[100],
      },
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
})
