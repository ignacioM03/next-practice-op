import { OrderType } from "@/types/OrderType";
import React from "react";

type OrderCheckCardProps = {
  order: OrderType;
};

export const OrderAccordionItem = ({ order }: OrderCheckCardProps) => {
  return (
    <details className="flex flex-wrap -m-4">
      <summary className="flex cursor-pointer list-none items-center justify-between p-6 text-lg font-medium text-secondary-900">
        #{order.id}
        <div className="text-secondary-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="block h-5 w-5 transition-all duration-300 group-open:-rotate-90"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </summary>
      <div className="px-6 pb-6 text-secondary-500">
        {order.total}
        <p>
          {order.items.map((item) => (
            <div key={item.id}>
              <p>{item.title}</p>
            </div>
          ))}
        </p>
      </div>
    </details>
  );
};
