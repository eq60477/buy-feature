import { Text } from "@radix-ui/themes";
import { FC, memo, useEffect} from "react";
import useContent from "../../../hooks/useContent";
import "./OrderConfirmation.css";

const OrderConfirmation: FC = () => {
  const {entries, singleEntry, fetchEntries, fetchSingleEntry, loading, error} = useContent(); 

  useEffect(() => {
    fetchEntries(); 
    fetchSingleEntry('blta88b9c28b47e0b26');  //Hardcoded UID to fetch specific entry to display content 
  }, [fetchEntries, fetchSingleEntry]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
    
  return (
    <div className="order-confirmation-container">
      <h1>Order Confirmation</h1>
      {entries.length > 0 && (
        <div>
          <Text>Data from Contentstack Entry 1 and 2:</Text>
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
      <Text>Thank you for your order, [Customer Name]!</Text>
      <Text>
        Please read our <a href="/terms-and-conditions">Terms & Conditions</a>.
      </Text>
      <Text>Your order confirmation number is: [Order Confirmation Number]</Text>
      <Text>For any queries, please contact our customer care.</Text>
      <Text>
        <a href="/account">Go to your account page</a>
      </Text>
    </div>
  );
};

export default memo(OrderConfirmation);