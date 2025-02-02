import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Pets from './pages/Pets';
import AddPet from './pages/AddPet';
import Menu from './components/Menu';
import PageNotFound from './pages/PageNotFound';
import { ToastContainer } from 'react-toastify';
import { Container } from '@mui/material'; 
import BackgroundManager from './components/BackgroundManager';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Router>
      <BackgroundManager />
        <Routes>
          {/* Roteamento sem o Menu */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<PageNotFound />} />

          {/* Grupo de rotas com Menu e Container */}
          <Route
            path="/*"
            element={
              <Container sx={{ padding: '20px'
               }}>
                <Menu />
                <Routes>
                  <Route path="home" element={<Home />} />
                  <Route path="pets" element={<Pets />} />
                  <Route path="pets/add" element={<AddPet />} />
                  <Route path="pets/edit/:id" element={<AddPet />} />
                </Routes>
              </Container>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundImage = "url('/images/background_home.png')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
});

export default App;
