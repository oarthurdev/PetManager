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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          {/* Roteamento sem o Menu */}
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/404" element={<PageNotFound />} />

          {/* Roteamento com o Menu */}
          <Route
            path="/home"
            element={
              <>
                <Menu />
                <Home />
              </>
            }
          />
          <Route
            path="/pets"
            element={
              <>
                <Menu />
                <Pets />
              </>
            }
          />
          <Route
            path="/pets/add"
            element={
              <>
                <Menu />
                <AddPet />
              </>
            }
          />
          <Route
            path="/pets/edit/:id"
            element={
              <>
                <Menu />
                <AddPet />
              </>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
