import React from 'react';
import { Drawer, List, ListItem, ListItemText, Divider, IconButton } from '@mui/material';
import { Menu as MenuIcon, Home as HomeIcon, Pets as PetsIcon, ExitToApp as LogoutIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          backgroundColor: '#2C3E50',
          color: '#fff',
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem button onClick={() => handleNavigate('/home')}>
          <HomeIcon sx={{ marginRight: 2 }} />
          <ListItemText primary="Home" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => handleNavigate('/pets')}>
          <PetsIcon sx={{ marginRight: 2 }} />
          <ListItemText primary="Pets" />
        </ListItem>
        <Divider />
        <ListItem button onClick={() => handleNavigate('/')}>
          <LogoutIcon sx={{ marginRight: 2 }} />
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Menu;
