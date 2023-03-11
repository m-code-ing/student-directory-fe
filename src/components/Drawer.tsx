import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LogoutIcon from '@mui/icons-material/Logout'
import LoginIcon from '@mui/icons-material/Login'
import LockPersonIcon from '@mui/icons-material/LockPerson'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import { useNavigate } from 'react-router-dom'
import { useTheme } from '@mui/material'
import { Auth } from 'aws-amplify'
import { ROUTES } from '../App'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

type TemporaryDrawerProps = {
  open: boolean
  onToggleDrawer: (open: boolean) => void
}

const NAV_LINKS = {
  login: 'Login',
  signUp: 'Sign up',
  logout: 'Logout',
  securePage: 'Secure Page',
} as const

const linkTexts = Object.values(NAV_LINKS)

type NavLinksValue = (typeof NAV_LINKS)[keyof typeof NAV_LINKS]

export default function TemporaryDrawer({ open, onToggleDrawer }: TemporaryDrawerProps) {
  const navigate = useNavigate()
  const theme = useTheme()

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }
    onToggleDrawer(open)
  }

  const signOut = async () => {
    try {
      await Auth.signOut()
      navigate('/login')
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  const onMenuItemClick = (text: string) => {
    switch (text) {
      case NAV_LINKS.signUp:
        navigate(ROUTES.signUp)
        break
      case NAV_LINKS.login:
        navigate(ROUTES.login)
        break
      case NAV_LINKS.logout:
        signOut()
        break
      case NAV_LINKS.securePage:
        navigate(ROUTES.securePage)
        break

      default:
        console.log({ text })
        break
    }
  }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {linkTexts.map((text: NavLinksValue, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                onMenuItemClick(text)
              }}
            >
              <ListItemIcon>
                {text === NAV_LINKS.login && <LoginIcon />}
                {text === NAV_LINKS.signUp && <AppRegistrationIcon />}
                {text === NAV_LINKS.logout && <LogoutIcon />}
                {text === NAV_LINKS.securePage && <LockPersonIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <div>
      <Box bgcolor={theme.palette.custom.bg.dark} border={1}>
        <Drawer
          anchor="left"
          open={open}
          onClose={toggleDrawer(false)}
          PaperProps={{ sx: { bgcolor: theme.palette.custom.bg.light } }}
        >
          {list('left')}
        </Drawer>
      </Box>
    </div>
  )
}
