import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }: { children: JSX.Element }): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthenticating, setIsAuthenticating] = useState(true)

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(() => {
        setIsAuthenticated(true)
        setIsAuthenticating(false)
      })
      .catch(() => {
        setIsAuthenticated(false)
        setIsAuthenticating(false)
      })
  }, [])

  if (isAuthenticating) {
    return <div>Loading...</div>
  }

  if (!isAuthenticated) {
    alert('you are not logged in')
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute
