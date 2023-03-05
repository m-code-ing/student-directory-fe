import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material'

import SearchAppBar from './components/AppBar'
import LoginPage from './components/RegistrationForm/RegistrationForm'
import { BrowserRouter } from 'react-router-dom'
import StudentProfiles from './components/StudentProfiles/StudentProfiles'

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

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <SearchAppBar />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/students" element={<StudentProfiles />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
