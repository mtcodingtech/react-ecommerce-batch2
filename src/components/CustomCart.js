import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import { Shop, ShoppingCart } from '@mui/icons-material';
import { red } from '@mui/material/colors';

export default function CustomCart() {
  return (
    <Badge badgeContent={4} color={'warning'}>
      <ShoppingCart sx={{color: "#fff"}} />
    </Badge>
  );
}
