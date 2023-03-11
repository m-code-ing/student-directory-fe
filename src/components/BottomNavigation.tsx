import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PeopleIcon from '@mui/icons-material/People'
import MessageIcon from '@mui/icons-material/Message'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0)

  return (
    <Box borderTop={1}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction icon={<AccountCircleIcon />} />
        <BottomNavigationAction icon={<MessageIcon />} />
        <BottomNavigationAction icon={<PeopleIcon />} />
      </BottomNavigation>
    </Box>
  )
}
