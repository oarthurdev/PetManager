import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Home as HomeIcon } from '@mui/icons-material';
import BreadcrumbsNav from '../components/BreadcrumbsNav';
import BreedSelector from '../components/BreedSelector';

const AddPet = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [imageUrls, setImageUrls] = useState('');
  const navigate = useNavigate();

  const handleAddPet = async () => {
    if (!name || !age || !breed || !imageUrls) {
      toast.error('Todos os campos são obrigatórios');
      return;
    }

    try {
      await axios.post('http://localhost:5000/api/pets', { name, age, breed, imageUrls }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      toast.success('Pet adicionado com sucesso!');
      navigate('/pets');
    } catch (error) {
      toast.error('Erro ao adicionar pet');
    }
  };

  return (
    <Container maxWidth="sm">
    <Button
        variant="outlined"
        color="primary"
        onClick={() => navigate(-1)} // Voltar para a tela anterior
        sx={{ marginBottom: 2 }}
      >
        Voltar
      </Button>
      <BreadcrumbsNav
        items={[
          { name: 'Home', link: '/home', icon: HomeIcon },
          { name: 'Pets', link: '/pets' },
          { name: 'Adicionar Pet', link: '/pets/add' }
        ]}
      />
      <Typography variant="h4" sx={{ marginBottom: 4 }}>Adicionar Pet</Typography>

      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Nome"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          label="Idade"
          fullWidth
          margin="normal"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <BreedSelector onChange={(breed) => setBreed(breed)} />
        {/* <TextField
          label="Raça"
          fullWidth
          margin="normal"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
        /> */}
        <TextField
          label="URLs das Imagens (separadas por vírgula)"
          fullWidth
          margin="normal"
          value={imageUrls}
          onChange={(e) => setImageUrls(e.target.value)}
        />
      </Box>

      <Button
        onClick={handleAddPet}
        variant="contained"
        color="primary"
        sx={{ width: '100%' }}
      >
        Adicionar Pet
      </Button>
    </Container>
  );
};

export default AddPet;
