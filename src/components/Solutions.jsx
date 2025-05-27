import React from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
const cards = [
  {
    title: 'Expertly crafted solutions with global reach',
    desc: "Our procurement and supply chain processes enhance operations for your organization's success.",
    action: 'Let’s Co-Create »',
  },
  {
    title: 'Strategic, collaborative, and driven',
    desc: 'We leverage innovative strategies and cutting-edge technology to streamline our processes.',
    action: 'Business Process Outsourcing »',
  },
  {
    title: 'Fresh perspective for continuous transformation',
    desc: 'Expert teams to develop groundbreaking solutions.',
    action: 'Direct Procurement »',
  },
];

function Solutions() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ py: 1, px: { xs: 2, sm: 4, md: 6 } }}>
      <Grid container spacing={4}>
        {cards.map((card, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                height: '100%',
                display: 'flex',
                width: { lg: '450px',
                  xs: '100%' },
                
                flexDirection: 'row',
                justifyContent: 'space-between',
                
              }}
            >
              <CardContent>
                <Typography
                  variant={isMobile ? 'h6' : 'h5'}
                  fontWeight="bold"
                  gutterBottom
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 2 }}
                >
                  {card.desc}
                </Typography>
                <Typography
                  color="secondary"
                  fontWeight="medium"
                  sx={{ cursor: 'pointer', '&:hover': { textDecoration: 'underline' } }}
                >
                  {card.action}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Solutions;
