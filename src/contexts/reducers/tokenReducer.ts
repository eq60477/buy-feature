import { TokenState, TokenAction } from "../../types/cart.type";

export const initialTokenState: TokenState = {
  access_token: ""
};

export const tokenReducer = (state: TokenState, action: TokenAction): TokenState => {
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
