import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton, Typography, Box, Tooltip } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, Pets as PetsIcon, ExitToApp as LogoutIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(true); // Estado do menu (aberto/fechado)

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      sx={{
        width: open ? 240 : 60,
        flexShrink: 0,
        transition: 'width 0.3s ease',
        '& .MuiDrawer-paper': {
          width: open ? 240 : 60,
          backgroundColor: '#2C3E50',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100vh',
          transition: 'width 0.3s ease',
          overflowX: 'hidden',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* Cabeçalho do menu */}
      <Box sx={{ textAlign: 'center', padding: 2, display: 'flex', alignItems: 'center', justifyContent: open ? 'space-between' : 'center' }}>
        {open && <Typography variant="h6">PetManager</Typography>}
        <IconButton onClick={handleToggleMenu} sx={{ color: 'white' }}>
          {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
      <Divider sx={{ backgroundColor: 'rgba(255,255,255,0.3)' }} />

      {/* Lista de navegação */}
      <List sx={{ flexGrow: 1 }}>
        <Tooltip title="Home" placement="right" disableHoverListener={open}>
          <ListItem button onClick={() => navigate('/home')} sx={{ cursor: 'pointer' }}>
            <HomeIcon sx={{ marginRight: open ? 2 : 0 }} />
            {open && <ListItemText primary="Home" />}
          </ListItem>
        </Tooltip>
        <Divider />

        <Tooltip title="Pets" placement="right" disableHoverListener={open}>
          <ListItem button onClick={() => navigate('/pets')} sx={{ cursor: 'pointer' }}>
            <PetsIcon sx={{ marginRight: open ? 2 : 0 }} />
            {open && <ListItemText primary="Pets" />}
          </ListItem>
        </Tooltip>
        <Divider />
      </List>

      {/* Footer com botão de Logout */}
      <Box>
        <Tooltip title="Logout" placement="right" disableHoverListener={open}>
          <ListItem button onClick={() => navigate('/')} sx={{ cursor: 'pointer' }}>
            <LogoutIcon sx={{ marginRight: open ? 2 : 0 }} />
            {open && <ListItemText primary="Logout" />}
          </ListItem>
        </Tooltip>
      </Box>
    </Drawer>
  );
};

export default Menu;
