"use client";

import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeFromCart, clearCart } from "@/redux/productSlice";

export default function Checkout() {
  const dispatch = useDispatch();
  const products = useSelector((state) =>  state.productSlice.products);
  const cart = useSelector((state) => state.productSlice.cart);

  // Filter products that are in the cart
  const cartItems = products.filter((product) => cart[product.id]);

  // Calculate total price
  const totalPrice = cartItems.reduce((total, product) => {
    return total + product.price * cart[product.id];
  }, 0);

  return (
    <div>
      <h1>Cart Summary</h1>
      {cartItems.length > 0 ? (
        <>
          <ul>
            {cartItems.map((product) => (
              <li key={product.id}>
                {product.title} - ${product.price} x {cart[product.id]}
                <div>
                  <button onClick={() => dispatch(decreaseQuantity(product.id))}>-</button>
                  <span>{cart[product.id]}</span>
                  <button onClick={() => dispatch(increaseQuantity(product.id))}>+</button>
                  <button onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ${totalPrice.toFixed(2)}</h2>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
}
