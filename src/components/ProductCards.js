"use client";
import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "@/redux/productsSlice";

function ProductCards({ products }) {
  const storedProducts = useSelector((state) => state.productItems.products);
  console.log(storedProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length > 0) {
      dispatch(setProducts(products));
    }
  }, [products, dispatch]);

  return (
    <>
      {storedProducts.map((product) => (
        <React.Fragment key={product.id}>
          <ProductCard product={product} />
        </React.Fragment>
      ))}
    </>
  );
}

export default ProductCards;
