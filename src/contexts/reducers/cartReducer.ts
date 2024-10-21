import {
  CartState,
  CartAction,
  CartActionTypes,
  CartItem
} from "../../types/cart.type";

export const cartInitialState: CartState = {
  cartItem: {
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
  },
  loading: true
};

export const cartReducer = (
  state: CartState = cartInitialState,
  action: CartAction
): CartState => {
  switch (action.type) {
    case CartActionTypes.GET_CART:
      return getCart(state, action.payload);
    case CartActionTypes.CLEAR_CART:
      return cartInitialState;
    default:
      return state;
  }
};

const getCart = (state: CartState, cartItem: CartItem): CartState => ({
  ...state,
  cartItem: {
    ...state.cartItem,
    lineItems: cartItem.lineItems,
    totalPrice: cartItem.totalPrice,
    discount: cartItem.discount,
    tax: cartItem.tax
  },
  loading: false
});
