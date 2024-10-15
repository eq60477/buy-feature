import { Button as RadixButton, Text, TextField } from "@radix-ui/themes";
import { FC, useState } from "react";

import "./ShoppingCart.css";
import { CartProps } from "./ShoppingCart.types";

const ShoppingCart: FC<CartProps> = ({ items }) => {
  const [cartCount, setCartCount] = useState<number>(0);
  return (
    <div className="container">
      <Text className="title">Shopping Cart Feature App</Text>
      <br />
      <p className="cartItems" role="paragraph">
        Cart Items: {cartCount}
      </p>
      <br />
      <RadixButton onClick={() => setCartCount(cartCount + 1)}>
        Add to Cart
      </RadixButton>
    </div>
  );
};
export default ShoppingCart;
