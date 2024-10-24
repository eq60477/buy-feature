import { LineItem, Money } from "../types/cart.type";

export const calculateTotal = (totalPrice: Money) => {
    if (!totalPrice) return 0;
    return totalPrice.centAmount / 100;
  };

  export const calculatePromotion = (item: LineItem) => {
    const discountedPrice = item?.price?.discounted?.value?.centAmount / 100;
    return isNaN(discountedPrice) ? 0 : discountedPrice.toFixed(2);
  };