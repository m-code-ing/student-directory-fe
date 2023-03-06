import { Container, Grid, Box, Typography, Stack, Link as MuiLink } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { FC } from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Auth } from 'aws-amplify'
import FormInput from './FormInput'
import styled from '@emotion/styled'

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
const forgotPasswordSchema = object({
  email: string().min(1, 'Email is required').email('Email is invalid'),
})

// ? Infer the Schema to get the TS Type
type IForgotPassword = TypeOf<typeof forgotPasswordSchema>

const ForgotPassword: FC = () => {
  // ? Default Values
  const defaultValues: IForgotPassword = {
    email: '',
  }

  // ? The object returned from useForm Hook
  const methods = useForm<IForgotPassword>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues,
  })

  const navigate = useNavigate()

  // ? Submit Handler
  const onSubmitHandler: SubmitHandler<IForgotPassword> = async (values: IForgotPassword) => {
    try {
      //  Send confirmation code to user's email
      await Auth.forgotPassword(values.email)
      navigate('/reset-password')
    } catch (error) {
      console.log(error)
    }
  }

  // ? JSX to be rendered
  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        height: '100vh',
        backgroundColor: { xs: '#fff', md: '#f4f4f4' },
      }}
    >
      <Grid container justifyContent="center" sx={{ width: '100%', height: '100%' }}>
        <Grid item sx={{ maxWidth: '70rem', width: '100%', backgroundColor: '#fff' }}>
          <FormProvider {...methods}>
            <Grid
              container
              sx={{
                boxShadow: { sm: '0 0 5px #ddd' },
                py: '1rem',
                px: '1rem',
              }}
            >
              <Grid
                item
                container
                justifyContent="center"
                rowSpacing={5}
                sx={{
                  maxWidth: { sm: '45rem' },
                  marginInline: 'auto',
                }}
                mt={1}
              >
                <Grid item xs={12} sm={12}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
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
                      Forgot Password
                    </Typography>

                    <FormInput
                      label="Enter your email"
                      type="email"
                      name="email"
                      focused
                      required
                      fullWidth
                    />

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
                      Send Confirmation Code
                    </LoadingButton>
                  </Box>
                </Grid>
              </Grid>
              <Grid container justifyContent="center">
                <Stack sx={{ mt: '3rem', textAlign: 'center' }}>
                  <Typography sx={{ fontSize: '0.9rem', mb: '1rem' }}>
                    Already have an account? <LinkItem to="/login">Login</LinkItem>
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          </FormProvider>
        </Grid>
      </Grid>
    </Container>
  )
}

export default ForgotPassword
