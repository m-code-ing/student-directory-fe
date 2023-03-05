import React from 'react'
import './App.css'
import StudentProfileCard from './components/StudentProfile'
import { userProfileProps } from './components/mocks/studentProfileMock'
import Grid from '@mui/material/Unstable_Grid2'
import styled from '@emotion/styled'
import { Paper, ThemeProvider, createTheme } from '@mui/material'
import type { Theme } from '@mui/material'
import SearchAppBar from './components/AppBar'

const { name, profilePictureUrl, email, phoneNumber, major, gpa } = userProfileProps

const theme = createTheme({
  palette: {
    primary: {
      main: '#90caf9',
    },
    secondary: {
      main: '#f48fb1',
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
})

const Item = styled(Paper)(({ theme }: { theme?: Theme }) => {
  return {
    backgroundColor: '#000',
    padding: theme?.spacing(1),
    textAlign: 'center',
    color: theme?.palette.text.secondary,
  }
})

const studens = [1, 2, 3, 4, 5]

const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <SearchAppBar />
        <Grid container spacing={2} justifyContent="center">
          {studens.map((key, index) => (
            <Grid xs={10} md={4} m={1} key={index}>
              <Item>
                <StudentProfileCard
                  name={name}
                  profilePictureUrl={profilePictureUrl}
                  email={email}
                  phoneNumber={phoneNumber}
                  major={major}
                  gpa={gpa}
                />
              </Item>
            </Grid>
          ))}
        </Grid>
      </div>
    </ThemeProvider>
  )
}

export default App
