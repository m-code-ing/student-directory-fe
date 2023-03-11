import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import PeopleIcon from '@mui/icons-material/People'
import MessageIcon from '@mui/icons-material/Message'
import { ROUTES, RouteValues } from '../routing/AppRoutes'

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0)
  const navigate = useNavigate()

  const valueToNavigationMap: Record<number, RouteValues> = {
    0: ROUTES.signUp,
    1: ROUTES.messages,
    2: ROUTES.students,
  }

  // TODO: implement navigation
  const handleNavigation = (value: number) => {
    console.log({ value })
    navigate(valueToNavigationMap[value])
  }

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
