import React, { useMemo } from "react";
import { Box, Flex, Skeleton, Grid, Text } from "@radix-ui/themes";
import { LineItem } from "../../../../types/cart.type";
import {
  calculatePromotion,
  calculateTotal
} from "../../../../utils/calculator";
import { getMonthlyExpiryDate } from "../../../../utils/formatter";
import useCart from "../../../../hooks/useCart";
import Button from "../../atoms/Button";

const LineItemComponent = ({
  item,
  cartIsFetching
}: {
  item: LineItem;
  cartIsFetching: boolean;
}) => (
  <Flex
    justify="between"
    direction={{ initial: "column", md: "row" }}
    key={item.id}
    width="100%"
  >
    <Box>
      <Text as="div" size={{ initial: "2", md: "3" }}>
        {item?.variant?.sku?.includes("Internet")
          ? `Bell Internet (${item.name["en-CA"]})`
          : `${item.name["en-CA"]} (Add-On Tier)`}
      </Text>
      <Text
        as="div"
        size={{ initial: "2", md: "3" }}
        style={{ marginBottom: "10px" }}
      >
        Total Price
      </Text>
    </Box>
    <Text as="div" size={{ initial: "2", md: "3" }}>
      <Skeleton loading={cartIsFetching}>
        ${(item?.price?.value?.centAmount / 100).toFixed(2)}/mo
      </Skeleton>
    </Text>
  </Flex>
);

const SummaryRow = ({
  label,
  value,
  cartIsFetching
}: {
  label: string;
  value: number | string;
  cartIsFetching: boolean;
}) => (
  <Box width="100%">
    <Flex
      justify="between"
      direction={{ initial: "column", md: "row" }}
    >
      <Text as="div" size={{ initial: "2", md: "3" }}>
        {label}
      </Text>
      <Text as="div" size={{ initial: "2", md: "3" }}>
        <Skeleton loading={cartIsFetching}>${value}/mo</Skeleton>
      </Text>
    </Flex>
  </Box>
);

const OrderSummary = () => {
  const { cartData, cartIsFetching } = useCart();

  const totalPromotions = useMemo(
    () => calculatePromotion(cartData?.totalPromotions),
    [cartData]
  );
  const totalTaxes = useMemo(
    () => calculateTotal(cartData?.taxedPrice?.totalTax),
    [cartData]
  );
  const subtotal = useMemo(
    () => calculateTotal(cartData?.taxedPrice?.totalGross),
    [cartData]
  );

  return (
    <Box
      width={{ initial: "90vw", md: "45vw" }}
    >
      <h1>Monthly Bill</h1>
      <Box>
        {cartData &&
          cartData.lineItems.map((item: LineItem) => (
            <LineItemComponent
              key={item.id}
              item={item}
              cartIsFetching={cartIsFetching}
            />
          ))}
      </Box>
      <br />
      <SummaryRow
        label="Total Promotions"
        value={totalPromotions}
        cartIsFetching={cartIsFetching}
      />
      <br />
      <SummaryRow
        label="Total Taxes"
        value={totalTaxes}
        cartIsFetching={cartIsFetching}
      />
      <br />
      <SummaryRow
        label="Subtotal"
        value={subtotal}
        cartIsFetching={cartIsFetching}
      />
      <br />
      <Grid>
        <Text size={{ initial: "2", md: "1" }}>
          (i) Taxes are calculated at checkout
        </Text>
        <Text size={{ initial: "2", md: "1" }}>
          (i) Your Crave subscription will be set to renew on{" "}
          {getMonthlyExpiryDate()}
        </Text>
      </Grid>
      <br />
      <Flex direction={{ initial: "column", md: "row" }}>
        <Button
          title="Continue Shopping"
          onClick={() => console.log("Continue Shopping")}
          variant="outline"
          size="4"
          style={{ marginRight: "30px", marginBottom: "10px" }}
        />
        <Button
          title="Complete Order"
          onClick={() => console.log("Complete Order")}
          size="4"
        />
      </Flex>
    </Box>
  );
};

export default OrderSummary;
