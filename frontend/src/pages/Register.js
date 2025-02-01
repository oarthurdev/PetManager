import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!name || !email || !password || !confirmPassword) {
      toast.error('Preencha todos os campos!');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem!');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
      toast.success('Registro realizado com sucesso!');
      navigate('/');
    } catch (error) {
      toast.error('Erro ao registrar!');
    }
  };

  return (
    <Container 
      maxWidth="xs" 
        sx={{
        marginLeft: '35px',
        maxWidth: '100% !important',
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'flex-start', // Alinha os itens à esquerda
        height: '100vh', 
        position: 'relative' // Garante que os elementos dentro dele possam ser posicionados corretamente
      }}
    >
      <div style={{
        maxWidth: '30% !important',
        background: 'rgba(0, 0, 0, 0.5)',
        color: '#FFFFFF',
        padding: '10px',
        position: 'absolute', 
        left: '0', 
        top: '50%', 
        transform: 'translateY(-50%)', 
        boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.2)', 
        borderRadius: '8px',
      }}>
        <Typography variant="h4" sx={{ marginBottom: 3, color: '#fff', textAlign: 'center' }}>Registrar</Typography>

        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            '& .MuiInputLabel-root': { color: 'white' }, // Cor do placeholder
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' }, // Borda branca normal
              '&:hover fieldset': { borderColor: 'white' }, // Borda branca ao passar o mouse
              '&.Mui-focused fieldset': { borderColor: 'white' } // Borda branca ao focar
            },
            input: { color: 'white' } // Cor do texto digitado
          }}
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            '& .MuiInputLabel-root': { color: 'white' }, // Cor do placeholder
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' }, // Borda branca normal
              '&:hover fieldset': { borderColor: 'white' }, // Borda branca ao passar o mouse
              '&.Mui-focused fieldset': { borderColor: 'white' } // Borda branca ao focar
            },
            input: { color: 'white' } // Cor do texto digitado
          }}
        />
        <TextField
          label="Senha"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            '& .MuiInputLabel-root': { color: 'white' }, // Cor do placeholder
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' }, // Borda branca normal
              '&:hover fieldset': { borderColor: 'white' }, // Borda branca ao passar o mouse
              '&.Mui-focused fieldset': { borderColor: 'white' } // Borda branca ao focar
            },
            input: { color: 'white' } // Cor do texto digitado
          }}
        />
        <TextField
          label="Confirmar Senha"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{
            '& .MuiInputLabel-root': { color: 'white' }, // Cor do placeholder
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' }, // Borda branca normal
              '&:hover fieldset': { borderColor: 'white' }, // Borda branca ao passar o mouse
              '&.Mui-focused fieldset': { borderColor: 'white' } // Borda branca ao focar
            },
            input: { color: 'white' } // Cor do texto digitado
          }}
        />
        <Button
          onClick={handleRegister}
          variant="contained"
          color="primary"
          sx={{ width: '100%', marginTop: 2 }}
        >
          Registrar
        </Button>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body2" color="white" onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
            Já tem uma conta? Faça login
          </Typography>
        </Box>
      </div>
    </Container>
  );
};

export default Register;
