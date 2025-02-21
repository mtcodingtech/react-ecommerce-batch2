import CustomList from "@/components/CustomList";
import { Container } from "@mui/material";
import React from "react";

export default async function Checkout() {
  const data = await fetch("https://dummyjson.com/products");
  const { products } = await data.json();
  
  console.log(products);
  return (
    <Container maxWidth="md">
      {
        products.map((product, index) => {
          return (
            <React.Fragment key={index}>
              {
                index < 3 ?   <CustomList product={product} /> : null
              }
            </React.Fragment>
          )
        })
      }
    
    </Container>
  );
}
