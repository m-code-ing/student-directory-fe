import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import StudentProfileCard from './components/StudentProfile'
import { userProfileProps } from './components/mocks/studentProfileMock'
import styled from '@emotion/styled'
import { Grid, Paper, ThemeProvider, createTheme } from '@mui/material'
import type { Theme } from '@mui/material'
import SearchAppBar from './components/AppBar'
import LoginPage from './components/RegistrationForm/RegistrationForm'
import { BrowserRouter } from 'react-router-dom'

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
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <SearchAppBar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/students"
              element={
                <Grid mt={1} container spacing={2} justifyContent="center">
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
              }
            />
            {/* <Route path="/signup" element={<SignupPage />} /> */}
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
