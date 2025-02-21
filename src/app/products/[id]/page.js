import { Container } from "@mui/material";
import React from "react";

export default async function ProductDetail(req, res) {
  const params = req.params;
  const searchParams = req.searchParams;

  const { id } = await params;
  const data = await fetch(`https://dummyjson.com/products/${id}`);
  const result = await data.json();

  console.log("req>>>", req);
  console.log("searchParams>>", await searchParams);
  console.log("result>>>", result);

  return <Container maxWidth="md">Product detail {result.title}</Container>;
}

// "use client";
// import React, { useEffect } from "react";
// import { useParams } from "next/navigation";

// function page() {
//   const { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await fetch(`https://dummyjson.com/products/${id}`);
//       const result = await data.json();
//       console.log(result)
//     };
//     fetchData()
//   }, []);

//   return <div>page</div>;
// }

// export default page;
