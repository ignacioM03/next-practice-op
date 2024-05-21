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
        Pedidos{" "}
        <div className=" flex flex-wrap -m-">
          {filterOrders.map((order) => (
            //<OrderCheckCard key={order.id} order={order} />
            <OrderAccordion key={order.id} />

            // <div
            //   className="mx-auto max-w-md overflow-hidden rounded-lg bg-white shadow"
            //   key={order.id}
            // >
            //   <img
            //     src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            //     className="aspect-video w-full object-cover"
            //     alt=""
            //   />
            //   <div className="p-4">
            //     <p className="mb-1 text-sm text-primary-500">
            //       Andrea Felsted • <time>18 Nov 2022</time>
            //     </p>
            //     <h3 className="text-xl font-medium text-gray-900">
            //       Migrating to Sailboat UI
            //     </h3>
            //     <p className="mt-1 text-gray-500">
            //       Sailboat UI is a modern UI component library for Tailwind CSS.
            //       Get started with 150+ open source components.
            //     </p>
            //     <div className="mt-4 flex gap-2">
            //       <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
            //         {" "}
            //         Design{" "}
            //       </span>
            //       <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
            //         {" "}
            //         Product{" "}
            //       </span>
            //       <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
            //         {" "}
            //         Develop{" "}
            //       </span>
            //     </div>
            //   </div>
            // </div>
          ))}
        </div>
        {/* <div className="grid gap-x-8 gap-y-4 grid-cols-3">
          
        </div> */}
      </div>
    </section>
  );
}
