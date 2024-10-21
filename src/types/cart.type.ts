// Cart Types
export interface CartProps extends CartState {}

export interface LineItem {
    id: string;
    name: LocalizedString;
    variant: Variant;
    quantity: number;
    price: Price;
    imageUrl: string;
}

export interface LocalizedString {
    "en-CA": string;
}

export interface Variant {
    sku: string;
}

export interface Price {
    value: Money;
    discounted: {
        value: Money
    };
}

export interface Money {
    centAmount: number;
}

export interface CartItem {
    lineItems: LineItem[];
    totalPrice: Money;
    discount: Money;
    tax: Money;
}

export interface CartState {
    cartItem: CartItem;
    loading: boolean;
}

export enum CartActionTypes {
    GET_CART = "GET_CART",
    CLEAR_CART = "CLEAR_CART"
}

interface GetCartAction {
    type: CartActionTypes.GET_CART;
    payload: CartItem;
}

interface ClearCartAction {
    type: CartActionTypes.CLEAR_CART;
}

export type CartAction = GetCartAction | ClearCartAction;

export interface TokenState {
    access_token: string;
}

// Token Types
export enum TokenActionTypes {
    ADD_TOKEN = "ADD_TOKEN",
    REMOVE_TOKEN = "REMOVE_TOKEN"
}

interface AddTokenAction {
    type: TokenActionTypes.ADD_TOKEN;
    payload: TokenState;
}

interface RemoveTokenAction {
    type: TokenActionTypes.REMOVE_TOKEN;
}

export type TokenAction = AddTokenAction | RemoveTokenAction;
