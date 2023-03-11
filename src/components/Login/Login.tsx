import { Grid, Box, Typography, Stack, Link as MuiLink } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { FC } from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import styled from '@emotion/styled'
import FormInput from '../FormInput'
import { Auth } from 'aws-amplify'

// ? Styled React Route Dom Link Component
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`

// ? Styled Material UI Link Component
export const OauthMuiLink = styled(MuiLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f6f7;
  border-radius: 1;
  padding: 0.6rem 0;
  column-gap: 1rem;
  text-decoration: none;
  color: #393e45;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background-color: #fff;
    box-shadow: 0 1px 13px 0 rgb(0 0 0 / 15%);
  }
`

// ? Login Schema with Zod
const loginSchema = object({
  email: string().min(1, 'Email is required').email('Email is invalid'),
  password: string().min(1, 'Password is required'),
})

// ? Infer the Schema to get the TS Type
type ILogin = TypeOf<typeof loginSchema>

const LoginPage: FC = () => {
  const navigate = useNavigate()
  // ? Default Values
  const defaultValues: ILogin = {
    email: '',
    password: '',
  }

  // ? The object returned from useForm Hook
  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  })

  // ? Submit Handler
  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    signIn(values.email, values.password)
  }

  async function signIn(username: string, password: string) {
    try {
      console.log({ username, password })
      const user = await Auth.signIn(username, password)
      console.log('User successfully signed in:', user)
      navigate('/students')
    } catch (error) {
      console.log('error signing in', error)
    }
  }

  // ? JSX to be rendered
  return (
    <Grid container justifyContent="center">
      <Grid item>
        <FormProvider {...methods}>
          <Grid
            container
            sx={{
              py: '6rem',
              px: '1rem',
            }}
          >
            <Grid
              item
              container
              justifyContent="space-between"
              rowSpacing={5}
              sx={{
                maxWidth: { sm: '45rem' },
                marginInline: 'auto',
              }}
            >
              <Grid item xs={12}>
                <Box
                  display="flex"
                  flexDirection="column"
                  component="form"
                  noValidate
                  autoComplete="off"
                  onSubmit={methods.handleSubmit(onSubmitHandler)}
                >
                  <Typography
                    variant="h6"
                    component="h1"
                    sx={{ textAlign: 'center', mb: '1.5rem' }}
                  >
                    Log into your account
                  </Typography>

                  <FormInput label="Enter your email" type="email" name="email" focused required />
                  <FormInput type="password" label="Password" name="password" required focused />

                  <LoadingButton
                    loading={false}
                    type="submit"
                    variant="contained"
                    sx={{
                      py: '0.8rem',
                      mt: 2,
                      width: '80%',
                      marginInline: 'auto',
                    }}
                  >
                    Login
                  </LoadingButton>
                </Box>
              </Grid>
              {/* <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    component="p"
                    sx={{
                      mb: '1.5rem',
                      textAlign: 'center',
                    }}
                  >
                    Log in with another provider:
                  </Typography>
                </Grid> */}
            </Grid>
            <Grid container justifyContent="center">
              <Stack sx={{ mt: '3rem', textAlign: 'center' }}>
                <Typography sx={{ fontSize: '0.9rem', mb: '1rem' }}>
                  Need an account? <LinkItem to="/">Sign up here</LinkItem>
                </Typography>
                <Typography sx={{ fontSize: '0.9rem' }}>
                  Forgot your <LinkItem to="/forgotPassword">password?</LinkItem>
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </FormProvider>
      </Grid>
    </Grid>
  )
}

export default LoginPage
