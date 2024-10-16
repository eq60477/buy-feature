import { Button as RadixButton, Text } from "@radix-ui/themes";
import { FC, useState } from "react";

import "./Shoppingcart.css";
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
