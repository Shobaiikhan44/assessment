import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';

const cards = [
  {
    title: 'Expertly crafted solutions with global reach',
    desc: "Our procurement and supply chain processes enhance operations for your organization's success.",
    action: "Let’s Co-Create »",
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
  return (
    <Box sx={{ py: 8, px: 4 }}>
      <Grid container spacing={4}>
        {cards.map((card, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Card
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // light transparent bg
                color: '#fff',
                backdropFilter: 'blur(10px)', // blur effect
                WebkitBackdropFilter: 'blur(10px)', // Safari support
                border: '1px  rgba(255, 255, 255, 0.2)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
                height: '100%',
              }}
            >
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>{card.title}</Typography>
                <Typography variant="body2" gutterBottom>{card.desc}</Typography>
                <Typography color="secondary" fontWeight="medium">{card.action}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Solutions;
