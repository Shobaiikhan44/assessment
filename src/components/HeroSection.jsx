import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import EarthImage from '../assets/earth.png'; // Ensure the path is correct

function HeroSection() {
  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
        color: '#fff',
        position: 'relative',
      
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 8, sm: 12, md: 16 },
      }}
    >
      {/* Floating Image (Right side) */}
      <Box
        component="img"
        src={EarthImage}
        alt="Earth"
        sx={{
          position: 'absolute',
          top: { xs: 20, md: 50 },
          right: { xs: '-50px', md: 0 },
          width: { xs: '350px', sm: '350px', md: '700px' },
          height: 'auto',
          
          
        }}
      />

      <Grid container spacing={4} alignItems="center" sx={{ position: 'relative', zIndex: 2 }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}
          >
            IGS exemplifies its dedication to<br />
            sustainability through innovative <br />
            procurement and supply chain practices <br />
            that boost operational efficiency and <br />
            drive industry-leading innovation
          </Typography>

          <Typography
            variant="body1"
            gutterBottom
            sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
          >
            IGS is committed to delivering high-quality products on time, every time.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{
              mt: 3,
              backgroundColor: '#fff',
              color: '#2d55a0',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: '#e0e0e0',
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
