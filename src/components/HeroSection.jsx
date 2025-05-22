import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import EarthImage from '../assets/earth.png'; // Ensure this path is correct

function HeroSection() {
  return (
    <Box
      sx={{
       
        color: '#fff',
        py: 20,
        px: { xs: 2, md: 4 },
        position: 'relative',
        overflow: 'hidden',
        padding: 20
      }}
    >
      {/* Absolute Image in the Top Right */}
      <Box
        component="img"
        src={EarthImage}
        alt="Earth"
        sx={{
          position: 'absolute',
          top: 100,
          right: 0,
          width: { xs: '200px', md: '700px' },
          height: 'auto',
          zIndex: 1,
          borderRadius: '0 0 0 20px',
        }}
      />

      {/* Text Content */}
      <Grid container spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid item xs={12} md={6} sx={{ textAlign: 'left', ml: { md: '150px' } }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            IGS exemplifies its dedication to<br />
            sustainability through innovative <br />
            procurement and supply chain practices <br />
            that boost operational efficiency and <br />
            drive industry-leading innovation
          </Typography>
          <Typography variant="body1" gutterBottom>
            IGS is committed to delivering high-quality products on time, every time.
          </Typography>
          <Button
  variant="contained"
  size="large"
  sx={{
    mt: 3,
    backgroundColor: '#fff',
    color: '#1976d2', // MUI default primary blue
    '&:hover': {
      backgroundColor: '#e0e0e0', // subtle hover effect
    },
  }}
>
  Book a Meeting →
</Button>

        </Grid>
      </Grid>
    </Box>
  );
}

export default HeroSection;
