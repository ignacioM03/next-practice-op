"use client";
import { OrderType } from "@/types/OrderType";
import Image from "next/image";
import Link from "next/link";

type OrderCheckCardProps = {
  order: OrderType;
};

export const OrderCheckCard = ({ order }: OrderCheckCardProps) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
      <Link href={`/orders/${order.id}`}>
        <div className="bg-gray-100 p-6 rounded-lg">
          <Image
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={order.items[0].image}
            alt="content"
            width={0}
            height={0}
          />
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
            {order.id}
          </h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
            {order.user.address.street}
          </h2>
          <p className="leading-relaxed text-base">
            {order.items.map((item) => (
              <div key={item.id}>
                <p>{item.title}</p>
              </div>
            ))}
          </p>
        </div>
      </Link>
    </div>
  );
};
