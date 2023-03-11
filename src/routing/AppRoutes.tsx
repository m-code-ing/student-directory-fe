import { Route, Routes } from 'react-router-dom'
import RegistrationForm from '../components/RegistrationForm/RegistrationForm'
import StudentProfiles from '../components/StudentProfiles/StudentProfiles'
import LoginPage from '../components/Login/Login'
import ConfirmSignup from '../components/ConfirmSignUp'
import ForgotPassword from '../components/ForgotPassword'
import ResetPassword from '../components/ResetPassword'
import SecurePage from '../components/SecurePage'
import PrivateRoute from '../PrivateRoute'

export const ROUTES = {
  signUp: '/',
  confirm: '/confirm',
  login: '/login',
  forgotPassword: '/forgotPassword',
  resetPassword: '/reset-password',
  securePage: 'secure-page',
  students: '/students',
}

const AppRoutes = (): JSX.Element => {
  return (
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
  )
}

export default AppRoutes
