export interface CartProps {
  data: CartState;
  onRemove: (id: string) => void;
  onAdd: (item: CartItem) => void;
}
export interface CartItem {
  id: string;
  name: {
    'en-CA': string;
  };
  variant: {
    sku: string;
  };
  quantity: number;
  price: {
    value: {
      centAmount: number;
    };
    discounted: {
      value: {
        centAmount: number;
      };
    };
  };
  imageUrl: string; // Add this property
}

export interface CartState {
  lineItems: CartItem[];
  totalPrice: {
    centAmount: number;
  };
  discount: {
    centAmount: number;
  };
  tax: {
    centAmount: number;
  };
}

export interface CartAction {
  type: "ADD_ITEM" | "REMOVE_ITEM" | "CLEAR_CART" | "GET_CART";
  payload?: CartState;
}

export interface TokenState {
  access_token: string;
}

export interface TokenAction {
  type: "ADD_TOKEN" | "REMOVE_TOKEN";
  payload?: TokenState;
}