import { createTheme } from '@mui/material'
import { deepPurple } from '@mui/material/colors'

declare module '@mui/material/styles' {
  interface Palette {
    custom: {
      bg: {
        dark: string
        light: string
      }
    }
  }
  // allow configuration using `createTheme`
  interface PaletteOptions {
    custom: {
      bg: {
        dark: string
        light: string
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
        light: deepPurple[50],
        dark: deepPurple[100],
      },
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
})
