import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { BrowserRouter } from 'react-router-dom'

import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'

import SearchAppBar from './components/AppBar'
import Layout from './Layout'
import AppRoutes from './routing/AppRoutes'

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
            <AppRoutes />
          </Layout>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
