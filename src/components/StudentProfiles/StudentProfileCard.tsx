import React from 'react'
import { Card, CardHeader, CardContent, Avatar, Typography, Grid, useTheme } from '@mui/material'

import CardMedia from '@mui/material/CardMedia'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import MoreVertIcon from '@mui/icons-material/MoreVert'

interface StudentProfileCardProps {
  name: string
  profilePictureUrl?: string
  email: string
  phoneNumber: string
  major: string
  gpa?: number
}

const StudentProfileCard: React.FC<StudentProfileCardProps> = (props): JSX.Element => {
  const { name, email, phoneNumber, major } = props
  const theme = useTheme()

  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: theme.palette.primary.light }} aria-label="recipe">
            {name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader={major}
      />
      <CardMedia component="img" height="194" image={props.profilePictureUrl} alt="Paella dish" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {email}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {phoneNumber}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </Grid>
          <Grid item mx={1}>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  )
}

export default StudentProfileCard
