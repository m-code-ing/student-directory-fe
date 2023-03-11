import { Box, Button } from '@mui/material'
import { Auth } from 'aws-amplify'

const SecurePage = () => {
  const onClick = async () => {
    const result = await Auth.currentAuthenticatedUser()

    console.log({ result })
  }

  return (
    <Box>
      <Button variant="outlined" onClick={onClick}>
        API Call
      </Button>
    </Box>
  )
}

export default SecurePage
