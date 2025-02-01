import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      background: '#F4F6F8',
    }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" color="primary">404</Typography>
        <Typography variant="h6" sx={{ marginBottom: 2 }}>Página não encontrada!</Typography>
        <Button variant="contained" color="primary" onClick={() => navigate('/home')}>
          Voltar para o início
        </Button>
      </Box>
    </Container>
  );
};

export default PageNotFound;
