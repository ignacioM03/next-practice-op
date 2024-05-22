import React from "react";
import { OrderAccordionItem } from "../OrderAccordionItem/OrderAccordionItem";
import { useOrderStore } from "@/store/OrderStore";
import { useAuth } from "@/context/authContext";

export const OrderAccordion = () => {
  const orders = useOrderStore((state) => state.orders);
  const { user } = useAuth();

  const filterOrders = orders.filter(
    (order) => order.user.email === user?.email
  );

  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <div className="md:flex md:justify-between">
        {filterOrders.map((order) => (
          <OrderAccordionItem key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
};
