import { createTheme } from '@mui/material'
import { grey, indigo, lightBlue } from '@mui/material/colors'

const primaryColor = indigo
const secondaryColor = lightBlue
const backgroundColor = grey

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
      main: primaryColor[500],
    },
    secondary: {
      main: secondaryColor[500],
    },
    custom: {
      bg: {
        light: backgroundColor[50],
        dark: backgroundColor[200],
      },
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
})
