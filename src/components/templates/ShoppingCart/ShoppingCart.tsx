import { Text } from "@radix-ui/themes";
import { FC, memo, useEffect } from "react";

import "./ShoppingCart.css";

import CartList from "../../ui/organisms/CartList";
import CartSummary from "../../ui/organisms/CartSummary";
import useCart from "../../../hooks/useCart";

const ShoppingCart: FC = () => {
  const { getCartItems, loading, fetchCartData } = useCart();

  useEffect(() => {
    fetchCartData();
  }, [fetchCartData]);

  return (
    <div className="cart-container">
      {loading ? (
        <Text>Loading...</Text>
      ) : getCartItems?.lineItems?.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <>
          <CartList />
          <CartSummary />
        </>
      )}
    </div>
  );
};

export default memo(ShoppingCart);
