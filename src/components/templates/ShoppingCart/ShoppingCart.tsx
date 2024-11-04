import { Text } from "@radix-ui/themes";
import { FC, memo } from "react";

import "./ShoppingCart.css";

import CartList from "../../ui/organisms/CartList";
import CartSummary from "../../ui/organisms/CartSummary";
import useCart from "../../../hooks/useCart";
import { Link } from "react-router-dom";
import { UseCartType } from "../../../types/cart.type";

const ShoppingCart: FC = () => {
  const { loading, cartData }: UseCartType = useCart();

  return (
      <div className="cart-container">
        <h1>Review your Cart</h1>
        {loading ? (
            <Text>Loading...</Text>
        ) : cartData?.lineItems?.length === 0 ? (
            <Text>Your cart is empty</Text>
        ) : (
            <>
              <CartList/>
              <CartSummary/>
            </>
        )}
      </div>
  );
};

export default memo(ShoppingCart);
