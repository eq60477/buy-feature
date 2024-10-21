import { LineItem, Money } from "../types/cart.type";

export const calculateTotal = (totalPrice: Money) => {
    if (!totalPrice) return 0;
    return totalPrice.centAmount / 100;
  };

export const calculatePromotion = (item: LineItem) => {
    return (item.price.discounted.value.centAmount / 100).toFixed(2);
  };