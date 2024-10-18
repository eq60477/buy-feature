import React, { createContext, useReducer, ReactNode, useContext } from "react";
import { CartItem, CartAction, CartState } from "../components/ShoppingCart/ShoppingCart.types";
import { TokenAction, TokenState } from "../components/ShoppingCart/ShoppingCart.types";

const initialState: CartState = {
  lineItems: [],
  totalPrice: {
    centAmount: 0
  },
  discount: {
    centAmount: 0
  },
  tax: {
    centAmount: 0
  }
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "CLEAR_CART":
      return initialState;
    case "GET_CART":
      return {
        ...state,
        lineItems: action.payload!.lineItems,
        totalPrice: action.payload!.totalPrice,
        discount: action.payload!.discount,
        tax: action.payload!.tax
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

const initialTokenState: TokenState = {
  access_token: ""
};

const TokenContext = createContext<{
  state: TokenState;
  dispatch: React.Dispatch<TokenAction>;
}>({
  state: initialTokenState,
  dispatch: () => null
});

const tokenReducer = (state: TokenState, action: TokenAction): TokenState => {
  console.log('Token:', action);
  console.log('State:', state);
  switch (action.type) {
    case "ADD_TOKEN":
      return {
        ...state,
        access_token: action.payload!.access_token
      };
    case "REMOVE_TOKEN":
      return initialTokenState;
    default:
      return state;
  }
};

export const TokenProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(tokenReducer, initialTokenState);

  return (
    <TokenContext.Provider value={{ state, dispatch }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);