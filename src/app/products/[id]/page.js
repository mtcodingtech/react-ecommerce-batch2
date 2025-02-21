// // "use client";
// import { Container } from "@mui/material";
// import React from "react";
// // import { useParams } from "next/navigation";

// export default async function ProductDetail() {
//   // const params = useParams();
//   const data = await fetch(`https://dummyjson.com/products/1`);
//   const result = await data.json();
//   console.log("result<>>>", result)
//   return <Container maxWidth="md">Product detail</Container>;
// }

"use client";
import React, { useEffect } from "react";
import { useParams } from "next/navigation";

function page() {
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(`https://dummyjson.com/products/${id}`);
      const result = await data.json();
      console.log(result)
    };
    fetchData()
  }, []);

  return <div>page</div>;
}

export default page;
