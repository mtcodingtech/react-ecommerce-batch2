import * as React from "react";
import Badge from "@mui/material/Badge";
import Link from "next/link";
import { useSelector } from "react-redux";
import { ShoppingCart } from "@mui/icons-material";

export default function CustomCart() {
  const cart = useSelector((state) => state.productSlice.cart);
  const totalCount = Object.values(cart).length;

  return (
    <Badge badgeContent={totalCount} color={"warning"}>
      <Link href={"/checkout"}>
        <ShoppingCart sx={{ color: "#fff" }} />
      </Link>
    </Badge>
  );
}
