import React, {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  Dispatch
} from "react";
import { cartInitialState, cartReducer } from "./reducers/cartReducer";
import {
  CartAction,
  CartState,
  TokenAction,
  TokenState
} from "../types/cart.type";
import { initialTokenState, tokenReducer } from "./reducers/tokenReducer";

export interface AppContextProps {
  cartState: CartState;
  cartDispatch: Dispatch<CartAction>;
  tokenState: TokenState;
  tokenDispatch: Dispatch<TokenAction>;
  // Add other contexts here
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, cartInitialState);
  const [tokenState, tokenDispatch] = useReducer(
    tokenReducer,
    initialTokenState
  );
  // Add other reducers here

  return (
    <AppContext.Provider
      value={{ cartState, cartDispatch, tokenState, tokenDispatch }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
