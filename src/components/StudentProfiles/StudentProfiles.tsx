import { Box, Grid, useTheme } from '@mui/material'
import { userProfileProps } from '../mocks/studentProfileMock'
import StudentProfileCard from './StudentProfileCard'

const { name, profilePictureUrl, email, phoneNumber, major, gpa } = userProfileProps

const StudentProfiles = (): JSX.Element => {
  const theme = useTheme()
  const studens = [1, 2, 3, 4, 5]
  return (
    <Box bgcolor={theme.palette.custom.bg.dark}>
      <Grid mt={1} container spacing={2} justifyContent="center">
        {studens.map((key, index) => (
          <Grid item xs={10} md={4} m={1} key={index}>
            <StudentProfileCard
              name={name}
              profilePictureUrl={profilePictureUrl}
              email={email}
              phoneNumber={phoneNumber}
              major={major}
              gpa={gpa}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default StudentProfiles
