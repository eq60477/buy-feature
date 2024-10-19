import React, { FC, memo, useState } from "react";
import CompleteOrderB from "../components/templates/CompleteOrderB/CompleteOrderB";

const CompleteOrder: FC = () => {
  const [isNewCustomer, setIsNewCustomer] = useState<boolean>(false);
  return <>{isNewCustomer ? <div>A New Customer</div> : <CompleteOrderB />}</>;
};

export default memo(CompleteOrder);
