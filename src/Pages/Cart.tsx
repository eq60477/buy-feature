import React, { FC, memo } from "react";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import { CartProvider } from "../contexts/CartContext";

const Cart: FC = () => {
  return (
    <CartProvider>
      <ShoppingCart 
        items={[]} 
        onRemove={() => {}} 
        onAdd={() => {}} 
      />
    </CartProvider>
  );
};

export default memo(Cart);
