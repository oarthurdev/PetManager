import React, { useState } from 'react';
import { Box, Button, Typography, Card, CardContent, CardMedia, Grid, useTheme, useMediaQuery } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const PetCarousel = ({ pets }) => {
  const [startIndex, setStartIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Verifica se a tela é de um dispositivo móvel

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1); // Avançar 1 ou 2 itens, dependendo do tamanho da tela
    }
  };

  const handleNext = () => {
    if (startIndex + (isMobile ? 1 : 3) < pets.length) {
      setStartIndex(startIndex + 1); // Avançar 1 ou 2 itens, dependendo do tamanho da tela
    }
  };

  const visiblePets = pets.slice(startIndex, startIndex + (isMobile ? 1 : 3));

  return (
    <Box sx={{
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      width: '100%',
      padding: '0 20px',
      position: 'relative', // Para posicionar as setas corretamente
    }}>
      <Button
        onClick={handlePrev}
        disabled={startIndex <= 0}
        sx={{
          position: 'absolute',
          left: 0,
          zIndex: 10,
          padding: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
        }}
      >
        <ArrowBack sx={{ fontSize: 40 }} />
      </Button>

      <Grid container spacing={3} justifyContent="center" alignItems="center">
        {visiblePets.map((pet, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'scale(1.05)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
            }}>
              <CardMedia
                component="img"
                height="300"
                image={pet.imageUrl}
                alt={pet.name}
                sx={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                  borderRadius: '8px 8px 0 0', // Canto arredondado na imagem
                }}
              />
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>{pet.name}</Typography>
                <Typography variant="body2" color="textSecondary">{pet.type}</Typography>
                <Typography variant="body2" color="textSecondary">{pet.age} anos</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Button
        onClick={handleNext}
        disabled={startIndex + (isMobile ? 1 : 3) >= pets.length}
        sx={{
          position: 'absolute',
          right: 0,
          zIndex: 10,
          padding: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
        }}
      >
        <ArrowForward sx={{ fontSize: 40 }} />
      </Button>
    </Box>
  );
};

export default PetCarousel;
