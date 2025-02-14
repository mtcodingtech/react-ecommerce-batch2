"use client";
import { Delete } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Badge, { badgeClasses } from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCartOutlined";
import CustomBottomNav from "@/components/CustomBottomNav";

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

function Test() {
  return (
    <>
      <Button component="p" variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" startIcon={<Delete />}>
        Delete
      </Button>
      <IconButton color="success">
        <ShoppingCartIcon fontSize="small" />
        <CartBadge badgeContent={2} color="primary" overlap="circular" />
      </IconButton>
      <CustomBottomNav />
    </>
  );
}

export default Test;
