import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Azul principal (cores que remetem a painel administrativo)
    },
    secondary: {
      main: '#424242', // Cor secundária para contrastar com o fundo
    },
    background: {
      default: '#f4f6f8', // Fundo do painel
      paper: '#ffffff',  // Cor de fundo dos painéis
    },
    text: {
      primary: '#333333', // Texto principal em cor escura
      secondary: '#757575', // Texto secundário mais suave
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif', // Fonte limpa e moderna
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 400,
    },
    body2: {
      fontWeight: 300,
    },
  },
  spacing: 8, // Espaçamento consistente
});

export default theme;