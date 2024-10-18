import { Button as RadixButton, Text } from "@radix-ui/themes";
import { FC, useEffect, useState } from "react";

import "./Shoppingcart.css";
import { CartItem, CartProps, CartState } from "./ShoppingCart.types";
import { useCart, useToken } from "../../contexts/CartContext";
import { fetchAccessToken } from "../../services/commercetools/token-service";
import { getCart } from "../../services/commercetools/cart-service";

import CartList from "./CartList";
import CartSummary from "./CartSummary";

const ShoppingCart: FC<CartProps> = () => {

  const {state: tokenState, dispatch: tokenDispatch} = useToken();
  const {state: cartState, dispatch: cartDispatch} = useCart();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchAccessToken();
      tokenDispatch({ type: "ADD_TOKEN", payload: data });

      const cart = await getCart(data);
      cartDispatch({ type: "GET_CART", payload: cart });
    }

    fetchData();
  }, [tokenDispatch, cartDispatch]);

  return (
    <div className="cart-container">
      {cartState?.lineItems?.length === 0 ? <Text>Your cart is empty</Text> : 
      (
        <>
          <CartList lineItems={cartState.lineItems} totalPrice={cartState.totalPrice} discount={cartState.discount} tax={cartState.tax} />
          <CartSummary totalPrice={cartState.totalPrice} discount={cartState.discount} tax={cartState.tax} lineItems={cartState.lineItems} />
        </>
      )
      }
    </div>
  );
};
export default ShoppingCart;
