import { FC } from "react";
import CartItemCard from "../molecules/CardItem";
import useCart from "../../../hooks/useCart";
import { LineItem, UseCartType } from "../../../types/cart.type";

const CartList: FC = () => {
  const { cartData, loading }: UseCartType = useCart();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cart-left">
      <div className="cart-view">
        {cartData?.lineItems.map((item: LineItem) => (
          <div className="cart-items" key={item.id}>
            <div className="item-details">
              <CartItemCard key={item.id} item={item} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartList;
