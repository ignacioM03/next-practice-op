"use client";
import { OrderTable } from "@/components/OrderTable/OrderTable";
import { useOrderStore } from "@/store/OrderStore";
import { calculateTotalOrders, countTotalItems } from "@/utils/utils";
import { useState } from "react";

export default function ShoppingPage() {
  const [hidden, setHidden] = useState(true);
  const orders = useOrderStore((state) => state.orders);
  const amount = calculateTotalOrders(orders);
  const sellingItems = countTotalItems(orders);

  const handleOrder = () => {
    setHidden(!hidden);
  };

  return (
    <div className="container mx-auto bg-gray-50 my-1 mt-10 mb-10">
      <section className="bg-white" hidden={!hidden}>
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Gestiona y administra tus ventas
            </h2>
            <p className="mt-4 text-gray-500 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
              dolores laborum labore provident impedit esse recusandae facere
              libero harum sequi.
            </p>
          </div>
          <div className="mt-8 sm:mt-12">
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Ganacias Totales
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  ${amount}
                </dd>
              </div>
              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Ventas Totales
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  {orders.length}
                </dd>
              </div>
              <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
                <dt className="order-last text-lg font-medium text-gray-500">
                  Productos Vendido
                </dt>
                <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">
                  {sellingItems}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <div className="">
        <OrderTable/>
      </div>
    </div>
  );
}
