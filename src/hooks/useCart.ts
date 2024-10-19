import { useEffect, useCallback } from "react";
import { AppContextProps, useAppContext } from "../contexts/AppContext";
import { CartActionTypes, TokenActionTypes } from "../types/cart.type";
import { getCart } from "../services/commercetools/cart-service";
import { fetchAccessToken } from "../services/commercetools/token-service";

const useCart = () => {
  const {
    cartState,
    cartDispatch,
    tokenState,
    tokenDispatch
  }: AppContextProps = useAppContext();

  const fetchCartData = useCallback(async () => {
    try {
      const token = tokenState.access_token || (await fetchAccessToken());
      tokenDispatch({ type: TokenActionTypes.ADD_TOKEN, payload: token });

      const cart = await getCart(token);
      if (!cart) {
        throw new Error("Failed to fetch cart items");
      }
      cartDispatch({ type: CartActionTypes.GET_CART, payload: cart });
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  }, [tokenState.access_token, tokenDispatch, cartDispatch]);

  const clearCart = useCallback(() => {
    try {
      cartDispatch({ type: CartActionTypes.CLEAR_CART });
    } catch (error) {
      console.error("Failed to clear cart:", error);
    }
  }, [cartDispatch]);

  return {
    getCartItems: cartState.cartItem,
    fetchCartData,
    clearCart,
    loading: cartState.loading
  };
};

export default useCart;
