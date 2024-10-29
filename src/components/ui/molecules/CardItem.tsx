import React from 'react'
import { LineItem } from '../../../types/cart.type';
import Button from "../atoms/Button";
import useCart from "../../../hooks/useCart";

 const CartItemCard: React.FC<{ item: LineItem }> = ({ item }) => {

  const {removeItem} = useCart();
  
  const handleRemoveItem = () => {
    const confirmed = window.confirm('Are you sure you want to remove this item from the cart?');
    if (confirmed) {
      removeItem(item.id);
    }
  }

    return (
      <div key={item.id} className="cart-item-card">
        <div className="item-image">
          <img src={item.imageUrl} />
        </div>
        <div className="item-details">
          <p><strong>{item.name['en-CA']}</strong></p>
          <p>{item.variant.sku}</p>
        </div>
        <div className="item-quantity-remove">
          <Button className="remove-item-button" title="Remove" onClick= {handleRemoveItem} />
        </div>
      </div>
    );
  };

  export default CartItemCard;