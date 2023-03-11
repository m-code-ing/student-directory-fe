import { ThemeProvider } from '@mui/material'
import { theme } from './theme'
import { BrowserRouter } from 'react-router-dom'

import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'

import Layout from './Layout'
import AppRoutes from './routing/AppRoutes'

Amplify.configure(awsconfig)

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Layout>
            <AppRoutes />
          </Layout>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
