import { Container } from "@mui/material";
import React from "react";

async function getProducts(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    if (!res.ok) throw new Error("Failed to fetch products");
    return await res.json();
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return null;
  }
}
// export default async function TestDetail({ params }) {
//   const { testId } = await params;
//   const result = await getProducts(testId);

//   if (!result) {
//     return <div> Error: This post could not be loaded.</div>;
//   }
//   return <Container maxWidth="md">Product detail {result.title}</Container>;
// }

export default async function TestDetail(req, res) {
  const { params, searchParams } = req;
  console.log("params>>", await params);
  console.log("searchParams>>", await searchParams);
    console.log(req)
  return <Container maxWidth="md">Product detail </Container>;
}
