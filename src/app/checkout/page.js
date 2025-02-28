"use client";
import CustomList from "@/components/CustomList";
import { Container } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function Checkout() {
  const products = useSelector((state) => state.productItems.products);
  const cart = useSelector((state) => state.productItems.cart);
  const cartItems = products.filter((product) => cart[product.id]);

  console.log("cartItems", cartItems);
  const totalPrice = cartItems.reduce((total, item) => {
    return total + item.price * cart[item.id];
  }, 0)
  return (
    <Container maxWidth="md">
      <h1>Cart Summary</h1>
      <ul>
        {cartItems.map((item) => {
          return <li key={item.id}>{item.title} {item.price} x {cart[item.id]}</li>;
        })}
      </ul>
      <h2>Total: {totalPrice}</h2>
    </Container>
  );
}
