import { Container, Grid, Box, Typography, Stack, Link as MuiLink } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { FC } from 'react'
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { literal, object, string, TypeOf } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import FormInput from '../FormInput'
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
const loginSchema = object({
  email: string().min(1, 'Email is required').email('Email is invalid'),
  firstName: string().min(1, 'First name is required'),
  lastName: string().nonempty({ message: "Last name can't be empty" }),
  phone: string()
    .min(1, { message: "Phone number can't be empty" })
    .regex(/^\d{10}$/, {
      message: 'Phone number must be 10 digits long',
    }),
  major: string().optional(),
  password: string()
    .min(1, 'Password is required')
    .min(8, 'Password must be more than 8 characters')
    .max(32, 'Password must be less than 32 characters'),
  persistUser: literal(true).optional(),
})

// ? Infer the Schema to get the TS Type
type ILogin = TypeOf<typeof loginSchema>

const RegistrationForm: FC = () => {
  // ? Default Values
  const defaultValues: ILogin = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    major: '',
    password: '',
  }

  // ? The object returned from useForm Hook
  const methods = useForm<ILogin>({
    resolver: zodResolver(loginSchema),
    defaultValues,
  })

  // ? Submit Handler
  const onSubmitHandler: SubmitHandler<ILogin> = (values: ILogin) => {
    console.log(values)
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
                      Create your account
                    </Typography>

                    <FormInput
                      label="Enter your email"
                      type="email"
                      name="email"
                      focused
                      required
                      fullWidth
                    />
                    <FormInput
                      label="First name"
                      type="text"
                      name="firstName"
                      focused
                      required
                      fullWidth
                    />
                    <FormInput
                      label="Last name"
                      type="text"
                      name="lastName"
                      focused
                      required
                      fullWidth
                    />
                    <FormInput
                      label="Phone number"
                      type="number"
                      inputMode="numeric"
                      name="phoneNumber"
                      focused
                      required
                      fullWidth
                    />
                    <FormInput
                      type="password"
                      label="Password"
                      name="password"
                      required
                      fullWidth
                      focused
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
                      Create
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

export default RegistrationForm
