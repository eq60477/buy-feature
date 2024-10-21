import { FC } from "react";
import useCart from "../../../hooks/useCart";
import { calculatePromotion, calculateTotal } from "../../../utils/calculator";

const CartSummary: FC = () => {
  const { getCartItems } = useCart();
  const { lineItems, totalPrice } = getCartItems;

  return (
    <div className="cart-right">
      <h2>Monthly Bill</h2>
      <ul>
        {lineItems.map((item) => (
          <li key={item.id}>
            <table>
              <tbody>
                <tr key={item.id}>
                  <td>{item.name["en-CA"]}</td>
                </tr>
                <tr>
                  <td>Total Price</td>
                  <td>${(item.price.value.centAmount / 100).toFixed(2)}</td>
                </tr>
                <tr>
                  <td>Promotion</td>
                  <td>${calculatePromotion(item)}</td>
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
              <td width={130}>Subtotal</td>
              <td>${calculateTotal(totalPrice)}</td>
            </tr>
          </tbody>
        </table>
        <p className="info-text">(i) Taxes are calculated at checkout</p>
        <p className="info-text">
          (i) Your crave subscription will be set to renew on{" "}
          {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default CartSummary;
