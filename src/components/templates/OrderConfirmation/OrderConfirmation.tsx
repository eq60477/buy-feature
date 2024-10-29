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
    console.log("This needs to be printed", orderConfirmation); 
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
      <h1>Order Confirmation</h1>
      <Text>Thank you for your order, [Customer Name]!</Text>
      <Text>{orderConfirmation ? (
        <Text>Your order confirmation number is: {orderConfirmation.id}</Text>
      ) : (
        <Text>{orderError}</Text>
      )}</Text>
      <div className="order-summary">
        <h2>Order Summary</h2>
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
        <div>
          <h2>Data from Contentstack:</h2>
          <ul>
            <li><Text>UID: {entries[0].uid}</Text></li>
            <li><Text>Banner Title: {entries[0].banner_title}</Text></li>
          </ul>
          <ul>
            <li><Text>UID: {entries[1].uid}</Text></li>
            <li><Text>Banner Title: {entries[1].banner_title}</Text></li>
          </ul>
        </div>
      )}
      {singleEntry && (
        <div>
          <Text>Single Entry:</Text>
          <ul>
            <li><Text>UID: {singleEntry.uid}</Text></li>
            <li><Text>Banner Title: {singleEntry.banner_title}</Text></li>
          </ul>
        </div>
      )}
      <Text>
        Please read our <a href="/terms-and-conditions">Terms & Conditions</a>.
      </Text>

      <Text>For any queries, please contact our customer care.</Text>
      <Text>
        <a href="/account">Go to your account page</a>
      </Text>
    </div>
  );
};

export default memo(OrderConfirmation);