import React, { FC, memo, useState } from "react";
import CheckoutExistingCustomer from "../components/templates/Checkout/ExistingCustomer/ExistingCustomer";
import CheckoutNewCustomer from "@components/templates/Checkout/NewCustomer/NewCustomer.tsx";

const CompleteOrder: FC = () => {
  const newCustomer = localStorage.getItem("newCustomer") === "true"; //TODO: Remove this after new global context in implemented
  const [isNewCustomer, setIsNewCustomer] = useState<boolean>(newCustomer);
  return <>{isNewCustomer ? <CheckoutNewCustomer /> : <CheckoutExistingCustomer />}</>;
};

export default memo(CompleteOrder);
