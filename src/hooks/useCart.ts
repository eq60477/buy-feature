import { useCallback } from "react";
import { AppContextProps, useAppContext } from "../contexts/AppContext";
import {
  CartActionTypes,
  TokenActionTypes,
  UseCartType
} from "../types/cart.type";
import { getCart, removeLineItem } from "../services/commercetools/cart-service";
import { fetchAccessToken } from "../services/commercetools/token-service";
import { useQuery } from "@tanstack/react-query";
import { UseQueryResult } from "@tanstack/react-query";
import { ERROR_MESSAGES } from "@utils/constants";

const useCart = (): UseCartType => {
  const {
    cartState,
    cartDispatch,
    tokenState,
    tokenDispatch
  }: AppContextProps = useAppContext();

  const fetchCartData = async () => {
    try {
      if (cartState.cartItem.lineItems.length === 0) {
        const token = tokenState.access_token || (await fetchAccessToken());
        tokenDispatch({ type: TokenActionTypes.ADD_TOKEN, payload: { access_token: token } });

        const cart = await getCart(token);
        if (!cart) {
          throw new Error("Failed to fetch cart items");
        }
        cartDispatch({ type: CartActionTypes.GET_CART, payload: cart });
        return cart;
      } else {
        return cartState.cartItem;
      }
    } catch (error) {
      // Todo: log error
      throw error;
    }
  };

  const {
    isPending: cartIsPending,
    error: cartError,
    data: cartData,
    isFetching: cartIsFetching,
    status
  }: UseQueryResult = useQuery({
    queryKey: ["cartData"],
    staleTime: 1000 * 60 * 60, // Data is considered stale and refreshed after 1 hour
    queryFn: fetchCartData
  });

  const clearCart = useCallback(() => {
    try {
      cartDispatch({ type: CartActionTypes.CLEAR_CART });
    } catch (error) {
      throw error;
    }
  }, [cartDispatch]);

  const removeItem = async(itemId: string) => {
    try {
      const token = tokenState.access_token || (await fetchAccessToken());
      tokenDispatch({ type: TokenActionTypes.ADD_TOKEN, payload: { access_token: token } });

        const removedItemId = await removeLineItem(token, itemId);
        if (!removedItemId) {
          throw new Error(ERROR_MESSAGES.REMOVE_ITEM_FAILED);
        }
      cartDispatch({ type: CartActionTypes.REMOVE_ITEM, payload: itemId });
    } catch (error) {
      throw error;
    }
  };

  return {
    clearCart,
    loading: cartState.loading,
    cartData,
    cartIsPending,
    cartIsFetching,
    cartError,
    status,
    removeItem
  };
};

export default useCart;
