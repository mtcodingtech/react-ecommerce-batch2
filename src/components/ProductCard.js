"use client";

import { Box, Button, Card, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Grid from "@mui/material/Grid2";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/redux/productsSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.productItems.cart);

  return (
    <>
      <Grid
        size={{ xs: 12, md: 6, lg: 4 }}
        sx={{ display: "flex", alignItems: "stretch" }}
      >
        <Card
          sx={{
            p: 2,
            display: "flex",
            flexWrap: "wrap",
            alignContent: "space-between",
          }}
        >
          <Box>
            <Image
              src={product.thumbnail}
              alt="img"
              width={500}
              height={500}
              style={{ width: "100%", height: 150, objectFit: "contain" }}
            />
            <Box className="content">
              <Typography>{product.title}</Typography>
              <Typography>{product.description}</Typography>
            </Box>
          </Box>
          <Box
            sx={{
              mt: 1.5,
              display: "flex",
              justifyContent: "center",
              gap: 1,
              width: "100%",
            }}
          >
            <Button
              size="small"
              variant="contained"
              onClick={() => dispatch(addToCart(product.id))}
            >
              Add to Cart
            </Button>
            <Link href={`/products/${product.id}`}>
              <Button size="small" variant="contained">
                View Detail
              </Button>
            </Link>
          </Box>
          {cart[product.id] && (
            <Box>
              <Button
                variant="contained"
                size="small"
                onClick={() => dispatch(decreaseQuantity(product.id))}
              >
                -
              </Button>
              <Typography component={"span"} sx={{ mx: 2 }}>
                {cart[product.id]}
              </Typography>
              <Button
                variant="contained"
                size="small"
                onClick={() => dispatch(increaseQuantity(product.id))}
              >
                +
              </Button>
            </Box>
          )}
        </Card>
      </Grid>
    </>
  );
}

export default ProductCard;
