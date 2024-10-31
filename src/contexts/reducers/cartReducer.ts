import {
  CartState,
  CartAction,
  CartActionTypes,
  CartItem
} from "../../types/cart.type";

export const cartInitialState: CartState = {
  cartItem: {
    id: "",
    version: 0,
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
  loading: true, 
  orderConfirmation: null, 
  orderError: null 
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
    case CartActionTypes.REMOVE_ITEM:
      return removeItem(state, action.payload);
    case CartActionTypes.CONFIRM_ORDER: 
      return confirmOrder(state, action.payload);
    case CartActionTypes.ORDER_ERROR: 
      return orderError(state, action.payload); 
    default:
      return state;
  }
};

const removeItem = (state: CartState, id: string): CartState => ({
  ...state,
  cartItem: {
    ...state.cartItem,
    lineItems: state.cartItem.lineItems.filter((item) => item.id !== id)
  }
});

const getCart = (state: CartState, cartItem: CartItem): CartState => ({
  ...state,
  cartItem: {
    ...state.cartItem,
    id: cartItem.id,
    version: cartItem.version,
    lineItems: cartItem.lineItems,
    totalPrice: cartItem.totalPrice,
    discount: cartItem.discount,
    tax: cartItem.tax
  },
  loading: false
});

const confirmOrder = (state: CartState, orderConfirmation: any): CartState => ({
  ...state,
  orderConfirmation,
  orderError: null
});

const orderError = (state: CartState, orderError: string): CartState => ({
  ...state,
  orderError,
  orderConfirmation: null
});
