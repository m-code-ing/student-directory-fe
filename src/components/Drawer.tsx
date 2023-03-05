import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import LogoutIcon from '@mui/icons-material/Logout'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration'
import { useNavigate } from 'react-router-dom'

type Anchor = 'top' | 'left' | 'bottom' | 'right'

type TemporaryDrawerProps = {
  open: boolean
  onToggleDrawer: (open: boolean) => void
}

export default function TemporaryDrawer({ open, onToggleDrawer }: TemporaryDrawerProps) {
  const navigate = useNavigate()
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

  const onMenuItemClick = (text: string) => {
    switch (text) {
      case 'Sign up':
        navigate('/')
        break
      case 'Students':
        navigate('/students')
        break

      default:
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
        {['Sign up', 'Students'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                onMenuItemClick(text)
              }}
            >
              <ListItemIcon>
                {text === 'Sign up' && <AppRegistrationIcon />}
                {text === 'Students' && <RecentActorsIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Messages', 'Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {text === 'Messages' && <InboxIcon />}
                {text === 'Logout' && <LogoutIcon />}
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
      <React.Fragment>
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          {list('left')}
        </Drawer>
      </React.Fragment>
    </div>
  )
}
