import { Text } from "@radix-ui/themes";
import { FC, memo, useEffect} from "react";
import useContent from "../../../hooks/useContent";
import { useLocation } from "react-router-dom";
import useCart from "../../../hooks/useCart";
import useCheckout from "../../../hooks/useCheckout";
import "./OrderConfirmation.css";

const OrderConfirmation: FC = () => {
  const {entries, singleEntry, fetchEntries, fetchSingleEntry, loading, error} = useContent(); 
  const { cartData, cartIsPending, cartIsFetching, cartError } = useCart();
  const location = useLocation();
  const { orderConfirmation, orderError } = location.state || {};


  useEffect(() => {
    fetchEntries(); 
    fetchSingleEntry('blta88b9c28b47e0b26');
  }, [fetchEntries, fetchSingleEntry]); 

  if (loading || cartIsPending || cartIsFetching) {
    return <div>Loading...</div>;
  }

  // if (error || cartError) {
  //   return <div>{error || cartError}</div>;
  // }

  const { lineItems, totalPrice } = cartData;
    
  return (
    <div className="order-confirmation-container">
      <div className="spaced-section">
        <Text className="normal-text"><strong>Dear Customer,</strong></Text>
      </div>
      <div className="spaced-section">
        <Text className="normal-text">
          Thank You. Your request has been received. Please review the following for more information. We recommend you save this email or print it for your records.
        </Text>
      </div>
      <div className="spaced-section">
        <Text className="bold-text">Confirmation Number: </Text>
        <Text className="normal-text">{orderConfirmation ? orderConfirmation.id : orderError}</Text>
      </div>
      <div className="spaced-section">
        <Text className="bold-text">Order Date: </Text>
        <Text className="normal-text">{orderConfirmation ? orderConfirmation.createdAt : orderError}</Text>
      </div>
      <div className="order-summary spaced-section">
        <Text className="bold-text">Order Summary</Text>
        <ul>
          {lineItems.map((item: { id: string; name: { "en-CA": string }; quantity: number; price: { value: { centAmount: number } } }) => (
            <li key={item.id}>
              <Text>{item.name["en-CA"]}</Text>
              <Text>Quantity: {item.quantity}</Text>
              <Text>Price: ${(item.price.value.centAmount / 100).toFixed(2)}</Text>
            </li>
          ))}
        </ul>
        <div className="summary-details">
          <Text>Total Price: ${(totalPrice.centAmount / 100).toFixed(2)}</Text>
        </div>
      </div>
      {entries.length > 0 && (
        <div className="spaced-section">
          <Text className="bold-text underline-text">Footer Info TBD</Text>
          <div>
            <Text>Banner Title: {entries[0].banner_title}</Text>
          </div>
          <div>
            <Text>Banner Title: {entries[1].banner_title}</Text>
          </div>
        </div>
      )}
      {singleEntry && (
        <div className="spaced-section">
          <Text>Single Entry:</Text>
          <div>
            <Text>Banner Title: {singleEntry.banner_title}</Text>
          </div>
        </div>
      )}
      <div className="spaced-section">
        <Text>
          Please read our <a href="/terms-and-conditions">Terms & Conditions</a>.
        </Text>
      </div>
      <div className="button-container">
        <button className="back-button">Back to Main Page</button>
      </div>
    </div>
  );
};

export default memo(OrderConfirmation);