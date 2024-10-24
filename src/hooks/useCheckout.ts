import React from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCustomerService } from "../services/servicenow/service-now";

const useCheckout = () => {
  const { data: serviceNowData, error: serviceNowError, isPending: serviceNowIsPending, isFetching: seviceNowIsFetching, status } = useQuery({
    queryKey: ["order"],
    queryFn: fetchCustomerService
  });

  return {
    serviceNowData, 
    serviceNowError,
    serviceNowIsPending,
    seviceNowIsFetching,
    status
  };
};

export default useCheckout;
