import React, { useState } from "react";
import { Button, Card, Divider, Spacer, Text } from "@nextui-org/react";

const HorizontalCard = ({ title, description }: any) => {
  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
    setShowCart(!showCart);
  };

  return (
    <Card shadow="sm">
      <Card>
        <Text h3>{title}</Text>
        <Spacer y={1} />
        <Text>{description}</Text>
        <Spacer y={2} />
        <Divider />
        <Spacer y={2} />
        <Button onClick={handleCartClick}>
          {showCart ? "Hide Cart" : "Show Cart"}
        </Button>
        {showCart && (
          <div>
            <Spacer y={1} />
            <Text color="success">Cart Content Goes Here</Text>
          </div>
        )}
      </Card>
    </Card>
  );
};

export default HorizontalCard;
