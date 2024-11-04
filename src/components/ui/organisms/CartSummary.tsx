import { FC } from "react";
import useCart from "../../../hooks/useCart";
import { calculatePromotion, calculateTotal } from "../../../utils/calculator";
import { LineItem, UseCartType } from "../../../types/cart.type";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

const CartSummary: FC = () => {
  const { cartData }: UseCartType = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-right">
      <h2>Monthly Bill</h2>
      <ul>
        {cartData?.lineItems.map((item: LineItem) => (
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
              <td>${calculateTotal(cartData?.totalPrice)}</td>
            </tr>
          </tbody>
        </table>
        <p className="info-text">(i) Taxes are calculated at checkout</p>
        <p className="info-text">
          (i) Your crave subscription will be set to renew on{" "}
          {new Date().toLocaleDateString()}
        </p>
        <br />
        <Button
          title="Checkout"
          size="3"
          style={{ marginRight: "30px", marginBottom: "10px" }}
          onClick={() => navigate('/complete-order')}
        />
      </div>
    </div>
  );
};

export default CartSummary;
