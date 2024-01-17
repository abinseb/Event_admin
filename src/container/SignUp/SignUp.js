import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '../../components/LandingNew/components/Typography';
import AppFooter from '../../components/LandingNew/views/AppFooter';
import AppAppBar from '../../components/LandingNew/views/AppAppBar';
import AppForm from '../../components/LandingNew/views/AppForm';
import {email, required,mobile ,numericCheck } from '../../components/LandingNew/form/validation';
import { Field, Form, FormSpy } from 'react-final-form';
import RFTextField from '../../components/LandingNew/form/RFTextField';
import FormButton from '../../components/LandingNew/form/FormButton';
import FormFeedback from '../../components/LandingNew/form/FormFeedback';
import withRoot from '../../components/LandingNew/withRoot';
import { HostSignUp } from '../../API /Registration';
import { useNavigate } from 'react-router-dom';
import ToastMessage from '../../components/ToastNotifications/ToastMessage';



function SignUp() {
  const [sent, setSent] = useState(false);

  const [notification,setNotification] = useState(null);

  const navigate = useNavigate();
  const validate = (values) => {
    const errors = required(['organization','email','mobile', 'password','confirmpassword'], values);
    
    // const errors = {};

    if(values.password !== values.confirmpassword){
      errors.confirmpassword = 'Password Mismatch';
    }

    // validating email
    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    // validating mobile
    if (!errors.mobile) {
      const mobileError = mobile(values.mobile);
      if (mobileError) {
        errors.mobile = mobileError;
      }
    }

    if (!errors.organization) {
      const nameError = numericCheck(values.organization);
      if (nameError) {
        errors.organization = nameError;
      }
    }
   

    return errors;
  };

  const handleSubmit = async (values) => {
    // try {
      const userData = {
        organization:values.organization,
        email:values.email,
        mobile:values.mobile,
        password:values.password,
      }
     console.log(userData);
     const signupresponse = await HostSignUp(userData);
     
      console.log("registration success",signupresponse.response)
      if(signupresponse === 201){
        setNotification(ToastMessageDisplay('success','SignUp Success'))
         
          navigate('/signinhere');
      }
      else{
          setNotification(ToastMessageDisplay('error',signupresponse.response.data.error))
        //  alert("Error");
      }
     
      setSent(false);
      // navigate('/signuphere')

    // } catch (error) {
    //   console.error('API request failed:', error.message);
    //   setNotification(ToastMessageDisplay('error','Sign Up Failed'))
    // }
  };

  const ToastMessageDisplay=(type,message)=>{
    return <ToastMessage type={type} message={message} />
  }

  return (

    <React.Fragment>
      <AppAppBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Sign Up
          </Typography>
          <Typography variant="body2" align="center">
            <Link href="/signinhere" underline="always">
              Already have an account?
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
                // autoComplete="organisationname"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Organization Name"
                margin="normal"
                name="organization"
                
                required
              />

              <Field
                // autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
              />

              <Field
                // autoComplete="tel"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Mobile"
                margin="normal"
                name="mobile"
                required
              />

              <Field
                // autoComplete="new-password"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Password"
                margin="normal"
                name="password"
                required
              />

               <Field
                // autoComplete="confirm-password"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Confirm Password"
                margin="normal"
                name="confirmpassword"
                type='password'
                required
              />
            
             
              {/* Add more fields as needed */}
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
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'In progress…' : 'Sign Up'}
              </FormButton>
            </Box>
            
          )}
          
        </Form>
     
      </AppForm>
      <AppFooter />
      {notification}
    </React.Fragment>
  
  );
}

export default withRoot(SignUp);
