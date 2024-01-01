import * as React from 'react';
import { Button } from '@mui/material';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

const backgroundImage =require('../../../image/evnt2.jpeg')

export default function EventTopScreen() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
      Seamless events, unforgettable experiences
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Register for seamless conducting of events
      </Typography>
      <Button
      variant="contained"
      size="large"
      sx={{
        backgroundColor: '#ff3366',
        minWidth: 200,
        '&:hover': {
          backgroundColor: '#ff3366', // Set to the same color as the default state
        },
      }}
    >
      Register
    </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </ProductHeroLayout>
  );
}