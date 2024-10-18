import { FC } from "react";
import { CartItem, CartState } from "./ShoppingCart.types";
import './Cart.css';

const CartItemCard: React.FC<{ item: CartItem }> = ({ item }) => {
    return (
      <div key={item.id} className="cart-item-card">
        <div className="item-image">
          <img src={item.imageUrl} />
        </div>
        <div className="item-details">
          <p><strong>{item.name['en-CA']}</strong></p>
          <p>{item.variant.sku}</p>
        </div>
      </div>
    );
  };

const CartList: FC<CartState> = ({lineItems : cartData}) => {
  return (
    <div className="cart-left">
          <div className="cart-view">
            <h1>Review your Cart</h1>
              {cartData.map((item) => (
                <div className="cart-items"  key={item.id}>
                    <div className="item-details">
                        <CartItemCard key={item.id} item={item}/>
                    </div>
                    <div className="item-quantity-remove">
                        <button className="remove-item-button">
                            Remove
                        </button>
                    </div>
                </div>
              ))}
          </div>
        </div>
  );
}

export default CartList;