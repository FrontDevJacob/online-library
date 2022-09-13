import * as StyledRegistration from 'components/guest/Registration/styled'
import { Form, GuestContent, Submit } from 'components/shared/styled'

import { HomeButton, Input } from 'components/shared'

import { useLogin } from './hooks'

import { history } from 'utils'

export const Login = () => {
   const { loginWithCredentials, loginWithFb, control, errors } = useLogin()
   return (
      <GuestContent>
         <HomeButton />
         <Form onSubmit={event => event.preventDefault()}>
            <Input
               {...{ control }}
               id="email"
               label="Email"
               type="text"
               placeholder="Enter email address..."
               error={errors.email?.message}
            />
            <Input
               {...{ control }}
               id="password"
               label="Password"
               type="password"
               placeholder="Enter password..."
               error={errors.password?.message}
            />
            <Submit onClick={loginWithCredentials}>Login</Submit>
            <Submit onClick={loginWithFb} withFacebook>
               Login with Facebook
            </Submit>
            <StyledRegistration.AnnotationsContainer>
               <StyledRegistration.Annotation onClick={() => history.push('/registration')}>
                  {"I don't have an account yet, go to registration page"}
               </StyledRegistration.Annotation>
               <StyledRegistration.Annotation onClick={() => history.push('/password-support')}>
                  I forgot password
               </StyledRegistration.Annotation>
            </StyledRegistration.AnnotationsContainer>
         </Form>
      </GuestContent>
   )
}
