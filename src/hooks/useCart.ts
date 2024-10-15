import { useState } from "react";
import { CartItem } from "../components/ShoppingCart/ShoppingCart.types";

const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const removeItem = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return {
    cart,
    removeItem,
    clearCart,
    getTotal
  };
};

export default useCart;
