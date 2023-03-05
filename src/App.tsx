import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import SearchAppBar from './components/AppBar'
import LoginPage from './components/RegistrationForm/RegistrationForm'
import { BrowserRouter } from 'react-router-dom'
import StudentProfiles from './components/StudentProfiles/StudentProfiles'

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
