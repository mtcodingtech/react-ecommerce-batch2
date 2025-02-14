"use client"
import React from 'react'
import { useParams } from 'next/navigation';

function page() {
    const params = useParams();
  return (
    <div>Product detail {params.id}</div>
  )
}

export default page