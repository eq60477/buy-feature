import React, { FC, memo, useState } from "react";
import CheckoutExistingCustomer from "../components/templates/Checkout/ExistingCustomer/ExistingCustomer";

const CompleteOrder: FC = () => {
  const [isNewCustomer, setIsNewCustomer] = useState<boolean>(false);
  return <>{isNewCustomer ? <div>A New Customer</div> : <CheckoutExistingCustomer />}</>;
};

export default memo(CompleteOrder);
