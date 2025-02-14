"use client";

import { useParams } from "next/navigation";
import React from "react";

function ProductDetail() {
  const { id } = useParams();

  return <div>ProductDetail Page {id}</div>;
}

export default ProductDetail;
