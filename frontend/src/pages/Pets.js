import React, { useEffect, useState } from 'react';
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';
import { AddCircle as AddCircleIcon } from '@mui/icons-material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BreadcrumbsNav from '../components/BreadcrumbsNav';
import { Home as HomeIcon } from '@mui/icons-material';

const Pets = () => {
  const [pets, setPets] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:5000/api/pets', {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
      .then(res => setPets(res.data))
      .catch(err => {
        toast.error('Erro ao carregar pets.');
        console.error(err);
      });
  }, []);

  const handleAddPet = () => {
    navigate('/pets/add');
  };

  return (
    <Container>
        <BreadcrumbsNav
        items={[
          { name: 'Home', link: '/home', icon: HomeIcon },
          { name: 'Pets', link: '/pets' }
        ]}
      />
      <Typography variant="h4" sx={{ marginBottom: 4 }}>Meus Pets</Typography>
      <Button
        onClick={handleAddPet}
        variant="contained"
        color="primary"
        sx={{ marginBottom: 3, display: 'flex', alignItems: 'center' }}
      >
        <AddCircleIcon sx={{ marginRight: 1 }} />
        Adicionar Pet
      </Button>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Idade</TableCell>
              <TableCell>Raça</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets.map((pet) => (
              <TableRow key={pet.id}>
                <TableCell>{pet.name}</TableCell>
                <TableCell>{pet.age}</TableCell>
                <TableCell>{pet.breed}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate(`/pets/edit/${pet.id}`)}
                  >
                    Editar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Pets;
