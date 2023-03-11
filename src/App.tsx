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
import SecurePage from './components/SecurePage'
import PrivateRoute from './PrivateRoute'

Amplify.configure(awsconfig)

export const ROUTES = {
  signUp: '/',
  confirm: '/confirm',
  login: '/login',
  forgotPassword: '/forgotPassword',
  resetPassword: '/reset-password',
  securePage: 'secure-page',
  students: '/students',
}

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Layout>
            <SearchAppBar />
            <Routes>
              <Route path={ROUTES.signUp} element={<RegistrationForm />} />
              <Route path={ROUTES.confirm} element={<ConfirmSignup />} />
              <Route path={ROUTES.login} element={<LoginPage />} />
              <Route path={ROUTES.forgotPassword} element={<ForgotPassword />} />
              <Route path={ROUTES.resetPassword} element={<ResetPassword />} />
              <Route
                path={ROUTES.securePage}
                element={
                  <PrivateRoute>
                    <SecurePage />
                  </PrivateRoute>
                }
              />
              <Route path={ROUTES.students} element={<StudentProfiles />} />
            </Routes>
          </Layout>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
