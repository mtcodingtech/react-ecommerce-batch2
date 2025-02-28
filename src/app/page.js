import React from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import ProductCards from "@/components/ProductCards";

export default async function Page() {
  const data = await fetch("https://dummyjson.com/products");
  const { products } = await data.json();

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <ProductCards products={products} />
      </Grid>
    </Container>
  );
}
