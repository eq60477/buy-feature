import React from "react";
import "./ExistingCustomer.css";
import {
  Box,
  Flex,
  Text} from "@radix-ui/themes";
import useCart from "../../../../hooks/useCart";
import { LineItem, UseCartType } from "../../../../types/cart.type";
import useCheckout from "../../../../hooks/useCheckout";
import ProductCard from "../../../ui/molecules/checkout/ProductCard";
import OrderSummary from "../../../ui/organisms/checkout/OrderSummary";

const CheckoutExistingCustomer: React.FC = () => {
  const {
    cartData,
    cartError,
    status: cartStatus,
    loading
  }: UseCartType = useCart();
  const {
    serviceNowData,
    serviceNowIsPending,
    status: orderStatus
  } = useCheckout();
  if (cartError) {
    // Todo: log error
    throw cartError;
  }

  return (
    <div className="checkout-order-container">
      <Flex
        gap="5"
        direction={{ initial: "column", md: "row" }}
        align="center"
        justify="center"
      >
        <Box width={{ initial: "90vw", md: "55vw" }}>
          <h1>Complete Your Order</h1>
          <Flex gap="3" direction={{ initial: "column", md: "row" }}>
            <Box width={{ initial: "90vw", md: "50vw" }}>
              {serviceNowData &&
                serviceNowData.services.map((item: any) => (
                  <Box style={{ marginBottom: "20px" }} key={item.id}>
                    <ProductCard
                      isFetching={serviceNowIsPending}
                      item={item}
                      showButton={false}
                      status={orderStatus}
                    />
                  </Box>
                ))}
              <Text size="4">Current Solution</Text>
            </Box>
            <Box width={{ initial: "90vw", md: "50vw" }}>
              {cartData &&
                cartData.lineItems.map((item: LineItem) => (
                  <Box style={{ marginBottom: "20px" }} key={item.id}>
                    <ProductCard
                      isFetching={loading}
                      item={item}
                      status={cartStatus}
                    />
                  </Box>
                ))}
              <Text size="4">New Solution</Text>
            </Box>
          </Flex>
        </Box>
        {<OrderSummary />}
      </Flex>
    </div>
  );
};

export default CheckoutExistingCustomer;
