import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCustomerService } from "../services/servicenow/service-now";
import { confirmOrder } from "../services/commercetools/order-service";
import { useAppContext } from "../contexts/AppContext";
import { CartActionTypes } from "../types/cart.type";
import { useState } from "react";

const useCheckout = () => {
  const { cartDispatch } = useAppContext();
  const [orderConfirmation, setOrderConfirmation] = useState(null);
  const [orderError, setOrderError] = useState<string | null>(null);

  const { data: serviceNowData, error: serviceNowError, isPending: serviceNowIsPending, isFetching: seviceNowIsFetching, status } = useQuery({
    queryKey: ["order"],
    queryFn: fetchCustomerService
  });

  const handleCompleteOrder = async () => {
    try{
      const order = await confirmOrder(); 
      cartDispatch({ type: CartActionTypes.CONFIRM_ORDER, payload: order });
      setOrderConfirmation(order);
      return order; 
    } catch (error) {
      cartDispatch({ type: CartActionTypes.ORDER_ERROR, payload: "Failed to complete order" });
      setOrderError("Failed to complete order");
      throw error;
    }
  }; 

  return {
    serviceNowData, 
    serviceNowError,
    serviceNowIsPending,
    seviceNowIsFetching,
    status, 
    handleCompleteOrder, 
    orderConfirmation, 
    orderError
  };
};

export default useCheckout;
