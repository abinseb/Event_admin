import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '../../components/LandingNew/components/Typography';
import AppFooter from '../../components/LandingNew/views/AppFooter';
import AppAppBar from '../../components/LandingNew/views/AppAppBar';
import { email, required } from '../../components/LandingNew/form/validation';
import RFTextField from '../../components/LandingNew/form/RFTextField';
import FormButton from '../../components/LandingNew/form/FormButton'
import FormFeedback from'../../components/LandingNew/form/FormFeedback';
import withRoot from '../../components/LandingNew/withRoot';

import AppForm from '../../components/LandingNew/views/AppForm';
import { useNavigate } from 'react-router-dom';
import { Co2Sharp } from '@mui/icons-material';
import { Host_Login } from '../../API /Login_USERS';
import { URL_Fetch } from '../../API /URL_Fetch';
import axios from 'axios';
import ToastMessage from '../../components/ToastNotifications/ToastMessage';




function SignInNew({onLogin}) {
  const url = URL_Fetch();
  const [sent, setSent] = React.useState(false);
  const [notification , setNotification] = React.useState('');
  const navigate = useNavigate();

  const validate = (values) => {
    const errors = required(['email', 'password'], values);
  

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = async(values) => {
    setSent(true);
    console.log(values.email,"password",values.password)
   
     try{
      const loginHost = await axios.post(`${url}/auth/login`,{
          
              "email" :values.email ,
              "password" :values.password
            })
      console.log("login",loginHost);
      if(loginHost.status === 200){
        setSent(false);
        const loginData = loginHost.data;
          await sessionStorage.setItem("token",loginData.token);
          console.log(loginData.token)
          await navigate('/eventlist');
      }
      else{
        alert("Invalid Credentials")
       
        setSent(false);
      }

  }
  catch(error){
     
      setSent(false);
      console.log("Error",error);
      setNotification(notificationDisplay('error',error.response.data.message));
  }

  };

  const notificationDisplay=(type,msg)=>{
    return(
      <ToastMessage
      type={type}
      message={msg}
      />
    )
  }

  return (
    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign In
          </Typography>
          <Typography variant="body2" align="center">
            {'Not a member yet? '}
            <Link
              href="/signUp"
              align="center"
              underline="always"
            >
              Sign Up here
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field
                // autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Password"
                type="password"
                margin="normal"
              />
              {/* <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy> */}
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
               
              >
                {submitting || sent ? 'In progress…' : 'Sign In'}
              </FormButton>
            </Box>
          )}
        </Form>
        <Typography align="center">
          <Link underline="always" 
        //   href="/premium-themes/onepirate/forgot-password/"
          >
            Forgot password?
          </Link>
        </Typography>
      </AppForm>
      <AppFooter />
      {notification}
    </React.Fragment>
  );
}

export default withRoot(SignInNew);