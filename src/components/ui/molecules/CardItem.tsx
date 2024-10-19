import React from 'react'
import { LineItem } from '../../../types/cart.type';

 const CartItemCard: React.FC<{ item: LineItem }> = ({ item }) => {
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

  export default CartItemCard;