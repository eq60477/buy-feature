import { FC, memo } from "react";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import { CartProvider } from "../contexts/CartContext";

const Cart: FC = () => {
  return (
    <CartProvider>
      <ShoppingCart 
        data={{ lineItems: [], totalPrice: {
          centAmount: 0
        }, discount: {
          centAmount: 0
        }, tax: {
          centAmount: 0
        } }} 
        onRemove={() => {}} 
        onAdd={() => {}} 
      />
    </CartProvider>
  );
};

export default memo(Cart);