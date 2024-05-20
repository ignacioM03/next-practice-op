"use client";
import { OrderCheckCard } from "@/components/OrderCheckCard/OrderCheckCard";
import { useAuth } from "@/context/UseAuth";
import { useOrderStore } from "@/store/OrderStore";
import Image from "next/image";
import { OrderAccordion } from "../../components/OrderAccordion/OrderAccordion";

export default function OrdersPage() {
  const orders = useOrderStore((state) => state.orders);
  const { user } = useAuth();

  const filterOrders = orders.filter(
    (order) => order.user.email === user?.email
  );

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Resumen de Mis Pedidos
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        Pedido w{" "}
        <div className="">
         
        <OrderAccordion />
        </div>
        {/* <div className="grid gap-x-8 gap-y-4 grid-cols-3">
          
        </div> */}
      </div>
    </section>
  );
}
