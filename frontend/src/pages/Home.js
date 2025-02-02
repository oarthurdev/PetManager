import React, { useEffect, useState } from 'react';
import {Typography, Button, Grid, Paper, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BreadcrumbsNav from '../components/BreadcrumbsNav';
import { Home as HomeIcon } from '@mui/icons-material';
import PetCarousel from '../components/PetCarousel';

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
        <>
            <BreadcrumbsNav
                items={[
                    { name: 'Home', link: '/home', icon: HomeIcon }
                ]}
            />
            <Typography variant="h4" gutterBottom>Meus Pets</Typography>
            {pets.length > 0 && (
                <PetCarousel pets={pets} />
            )}
        </>
    );
};

export default Home;
