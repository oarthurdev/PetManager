import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error('Preencha todos os campos!');
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      navigate('/home');
    } catch (error) {
      toast.error('Credenciais inválidas!');
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

        <Typography variant="h4" sx={{ marginBottom: 3, textAlign: 'center' }}>Login</Typography>

        <hr />
  
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
        <Button
          onClick={handleLogin}
          variant="contained"
          color="primary"
          sx={{ width: '100%', marginTop: 2 }}
        >
          Entrar
        </Button>
        <Box sx={{ marginTop: 2 }}>
          <Typography 
            variant="body2"  
            onClick={() => navigate('/register')} 
            sx={{ cursor: 'pointer', textAlign: 'center' }}
          >
            Não tem uma conta? Registre-se
          </Typography>
        </Box>
      </div>
    </Container>
  );  
};

export default Login;
