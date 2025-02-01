import React, { useEffect, useState } from 'react';
import { Container, Typography, Button, Grid, Paper, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BreadcrumbsNav from '../components/BreadcrumbsNav';
import { Home as HomeIcon } from '@mui/icons-material';

const Home = () => {
    const [pets, setPets] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
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

    const nextPet = () => {
        if (activeIndex < pets.length - 1) {
            setActiveIndex(activeIndex + 1);
        }
    };

    const prevPet = () => {
        if (activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }
    };

    return (
        <Container>
            <BreadcrumbsNav
                items={[
                    { name: 'Home', link: '/home', icon: HomeIcon }
                ]}
            />
            <Typography variant="h4" gutterBottom>Meus Pets</Typography>
            {pets.length > 0 && (
                <Box display="flex" justifyContent="center" alignItems="center">
                    <Button onClick={prevPet} variant="contained" color="primary">←</Button>
                    <Grid container spacing={2} justifyContent="center" alignItems="center">
                        <Grid item xs={12} md={4}>
                            <Paper elevation={3} sx={{ padding: 2 }}>
                                <img
                                    src={pets[activeIndex].imageUrls[0]}
                                    alt="Pet"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <Typography variant="h6">{pets[activeIndex].name}</Typography>
                                <Typography variant="body2">Idade: {pets[activeIndex].age}</Typography>
                                <Typography variant="body2">Raça: {pets[activeIndex].breed}</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Button onClick={nextPet} variant="contained" color="primary">→</Button>
                </Box>
            )}
        </Container>
    );
};

export default Home;
