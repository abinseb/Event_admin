import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import '../style.css';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function EventTypeDetails() {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        overflow: 'hidden',
        bgcolor: 'white',
        backgroundImage: `url(${require('../../../image/wallpaperline.png')})`, // Replace 'background-image.jpg' with your actual image path
        backgroundSize: 'cover', // Adjust as needed
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={require('../../../image/icset5.jpeg')}
                alt="suitcase"
                sx={{ height: 250 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Our Previous Events
              </Typography>
              <Typography variant="h5">
                {
                  'In a whirlwind of moments, history unfolded its chapters, weaving a tapestry of collective experiences'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={require('../../../image/icset3.jpeg')}
                alt="graph"
                sx={{ height: 250 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Industrial Talk
              </Typography>
              <Typography variant="h5">
                {
                  'As time marched forward, a symphony of events played out, composing the melody of our shared journey.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                component="img"
                src={require('../../../image/icset2.jpeg')}
                alt="clock"
                sx={{ height: 250 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                ICT Upcoming Events
              </Typography>
              <Typography variant="h5">
                {'In the grand theater of existence, each event played a unique role,  '}
                {'shaping the plot of our collective human story'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default EventTypeDetails;
