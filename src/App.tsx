import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import SearchAppBar from './components/AppBar'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import { BrowserRouter } from 'react-router-dom'
import StudentProfiles from './components/StudentProfiles/StudentProfiles'
import LoginPage from './components/Login/Login'
import Layout from './Layout'
import { Amplify } from 'aws-amplify'

import awsconfig from './aws-exports'
import ConfirmSignup from './components/ConfirmSignUp'
import ForgotPassword from './components/ForgotPassword'
import ResetPassword from './components/ResetPassword'
Amplify.configure(awsconfig)

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Layout>
            <SearchAppBar />
            <Routes>
              <Route path="/" element={<RegistrationForm />} />
              <Route path="/confirm" element={<ConfirmSignup />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/students" element={<StudentProfiles />} />
            </Routes>
          </Layout>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
