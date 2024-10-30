import { Box, Card, Flex, Skeleton, Avatar, Text } from "@radix-ui/themes";
import React, { memo } from "react";
import useCart from "@hooks/useCart";
import { LineItem } from "@customTypes/cart.type";
import Button from "@components/ui/atoms/Button";

interface ProductCardProps {
  isFetching: boolean;
  item: LineItem;
  showButton?: boolean;
  status: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  isFetching,
  item,
  showButton = true,
  status
}) => {

const {removeItem} = useCart();
  return (
    <Box maxWidth="350px">
      <Card style={{ padding: 0}}>
        <Flex gap="3" align="center">
          <Skeleton loading={isFetching}>
            <Avatar
              height="100px"
              size="6"
              src=""
              fallback="Img"
              alt="Product Image"
              style={{ borderRadius: 0}}
              
            />
          </Skeleton>
          <Box>
            <Text asChild size="3" weight="bold">
              <Skeleton loading={status === "pending"}>
                {item?.variant?.sku.includes("Internet")
                  ? `Bell Internet`
                  : `Crave Add-On`}
              </Skeleton>
            </Text>
            <Text as="div" size="2" color="gray">
              <Skeleton loading={status === "pending"}>
                {item.name["en-CA"]}
              </Skeleton>
            </Text>
          </Box>
          {showButton && (
            <Button
              title="Remove"
              variant="outline"
              style={{ marginLeft: 'auto', marginRight: 'auto' }}
              onClick={() => removeItem(item.id)}
            />
          )}
        </Flex>
      </Card>
    </Box>
  );
};

export default memo(ProductCard);
