import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { Home as HomeIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const BreadcrumbsNav = ({ items }) => {
  const navigate = useNavigate();

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ marginBottom: 2 }}>
      {items.map((item, index) => (
        <Link
          key={index}
          color="inherit"
          onClick={() => navigate(item.link)}
          sx={{ cursor: 'pointer' }}
        >
          {item.icon && <item.icon sx={{ marginRight: 1 }} />}
          {item.name}
        </Link>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
