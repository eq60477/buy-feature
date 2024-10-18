import { FC } from "react";
import { CartItem, CartState } from "./ShoppingCart.types";
import './Cart.css';


const CartSummary: FC<CartState> = ({lineItems : lineItems}, {totalPrice : totalPrice}) => {

    const calculateTotal = () => {
        if (!totalPrice) return 0;
        return totalPrice.centAmount / 100;
      };
    
      const calculatePromotion = (item: CartItem) => {
        return (item.price.discounted.value.centAmount / 100).toFixed(2);
      };

  return (
    <div className="cart-right">
          <h2>Monthly Bill</h2>
          <ul>
            {lineItems.map((item) => (
            <li key={item.id}>
                <table>
                    <tbody>
                        <tr key={item.id}>
                            <td>{item.name['en-CA']}</td>
                        </tr>
                        <tr>
                            <td>Total Price</td><td>${(item.price.value.centAmount / 100).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Promotion</td><td>${calculatePromotion(item)}</td>
                        </tr>
                    </tbody>
                </table>
            </li>
            ))}
          </ul>
          <div className="summary-details">
            <table>
                <tbody>
                <tr>
                    <td width={130} >Subtotal</td><td>${calculateTotal()}</td>
                </tr>
                </tbody>
            </table>
            <p className="info-text">(i) Taxes are calculated at checkout</p>
            <p className="info-text">(i) Your crave subscription will be set to renew on {new Date().toLocaleDateString()}</p>
          </div>
        </div>
  );
}

export default CartSummary;