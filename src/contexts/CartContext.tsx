import React, { createContext, useReducer, ReactNode, useContext } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

interface CartAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "CLEAR_CART";
  payload?: CartItem;
}

const initialState: CartState = {
  items: []
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
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload!.id)
      };
    case "CLEAR_CART":
      return initialState;
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
