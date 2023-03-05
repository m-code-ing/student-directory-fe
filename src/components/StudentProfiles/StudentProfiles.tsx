import { Grid, Paper } from '@mui/material'
import type { Theme } from '@mui/material'
import styled from '@emotion/styled'
import { userProfileProps } from '../mocks/studentProfileMock'
import StudentProfileCard from './StudentProfileCard'

const { name, profilePictureUrl, email, phoneNumber, major, gpa } = userProfileProps

const Item = styled(Paper)(({ theme }: { theme?: Theme }) => {
  return {
    backgroundColor: '#000',
    padding: theme?.spacing(1),
    textAlign: 'center',
    color: theme?.palette.text.secondary,
  }
})

const StudentProfiles = (): JSX.Element => {
  const studens = [1, 2, 3, 4, 5]
  return (
    <Grid mt={1} container spacing={2} justifyContent="center">
      {studens.map((key, index) => (
        <Grid xs={10} md={4} m={1} key={index}>
          <Item>
            <StudentProfileCard
              name={name}
              profilePictureUrl={profilePictureUrl}
              email={email}
              phoneNumber={phoneNumber}
              major={major}
              gpa={gpa}
            />
          </Item>
        </Grid>
      ))}
    </Grid>
  )
}

export default StudentProfiles
