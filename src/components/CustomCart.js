import * as React from "react";
import Badge from "@mui/material/Badge";
import { ShoppingCart } from "@mui/icons-material";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function CustomCart() {
  const cart = useSelector((state) => state.productItems.cart);
  const totalCount = Object.values(cart).length;
  // console.log("v", cart);
  // console.log("totalCount", totalCount);
  return (
    <Badge badgeContent={totalCount} color={"warning"}>
      <Link href="/checkout">
        <ShoppingCart sx={{ color: "#fff" }} />
      </Link>
    </Badge>
  );
}
