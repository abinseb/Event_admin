import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';


function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit">
       ict@gmail.com
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

const iconStyle = {
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'warning.main',
  mr: 1,
  '&:hover': {
    bgcolor: 'warning.dark',
  },
};



export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: '#a9a9a9' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction="column"
              justifyContent="flex-end"
              spacing={2}
              sx={{ height: 120 }}
            >
              <Grid item sx={{ display: 'flex' }}>
              <Box
      component="a"
   
      target="_blank" // Optional: Open link in a new tab
      rel="noopener noreferrer"
      sx={{
        display: 'inline-block', // To make sure the link behaves like an inline element
        width: 40, // Set the width of the icon
        height: 40, // Set the height of the icon
        '& img': {
          width: '100%', // Make the image fill the entire box
          height: '100%', // Make the image fill the entire box
        },
        marginRight:'3%'
      }}
    >
      <img
        src="https://static-00.iconduck.com/assets.00/facebook-icon-512x512-seb542ju.png"
        alt="Facebook"
      />
    </Box>
    <Box
      component="a"
      target="_blank" // Optional: Open link in a new tab
      rel="noopener noreferrer"
      sx={{
        display: 'inline-block', // To make sure the link behaves like an inline element
        width: 40, // Set the width of the icon
        height: 40, // Set the height of the icon
        '& img': {
          width: '100%', // Make the image fill the entire box
          height: '100%', // Make the image fill the entire box
        },
      }}
    >
      <img
        src="https://img.freepik.com/premium-vector/instagram-app-icon-social-media-logo-vector-illustration_277909-403.jpg?w=2000"
        alt="Facebook"
      />
    </Box>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link
    
                >Terms</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link 
                
                >Privacy</Link>
              </Box>
            </Box>
          </Grid>
         
        </Grid> 
      </Container>
    </Typography>
  );
}