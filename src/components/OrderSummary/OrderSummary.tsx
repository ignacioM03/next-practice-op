"use client";
import React from "react";
import { OrderCard } from "../OrderCard/OrderCard";
import { useOrderStore } from "@/store/OrderStore";
import { useAuth } from "@/context/UseAuth";
import Link from "next/link";
import { useFavItems } from "@/context/FavItems";

type OrderProps = {};

export const OrderSummary = () => {
  const { user } = useAuth();
  const orders = useOrderStore((state) => state.orders);
  // const myOrder = orders.filter((order) => order.user.email === user?.email)[
  //   orders.length - 1
  // ];
  const favItems = useFavItems().state.items;
  const myOrder = orders[orders.length - 1];
  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="font-manrope font-bold text-4xl leading-10 text-black text-center">
          Pago exitoso
        </h2>
        <p className="mt-4 font-normal text-lg leading-8 text-gray-500 mb-11 text-center">
          Gracias por realizar una compra, puede consultar nuestro resumen de
          pedidos a continuación
        </p>
        <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl max-lg:mx-auto lg:max-w-full">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between px-6 pb-6 border-b border-gray-200">
            <div className="data">
              <p className="font-semibold text-base leading-7 text-black">
                Orden Id:{" "}
                <span className="text-teal-600 font-medium">#{myOrder.id}</span>
              </p>
              <p className="font-semibold text-base leading-7 text-black mt-4">
                Orden de pago :{" "}
                <span className="text-gray-400 font-medium">
                  {" "}
                  18th march 2021
                </span>
              </p>
            </div>
            <Link
              className="rounded-full py-3 px-7 font-semibold text-sm leading-7 text-white bg-teal-600 max-lg:mt-5 shadow-sm shadow-transparent transition-all duration-500 hover:bg-teal-700 hover:shadow-indigo-400"
              href={`/orders/${myOrder.id}`}
            >
              Rastrea tu orden
            </Link>
          </div>
          <div className="w-full px-3 min-[400px]:px-6">
            {myOrder.items.length
              ? myOrder.items.map((item) => (
                  <OrderCard order={item} key={item.id} />
                ))
              : favItems.map((item) => (
                  <OrderCard order={item} key={item.id} />
                ))}
          </div>
          <div className="w-full border-t border-gray-200 px-6 flex flex-col lg:flex-row items-center justify-between ">
            <div className="flex flex-col sm:flex-row items-center max-lg:border-b border-gray-200">
              <button className="flex outline-0 py-6 sm:pr-6  sm:border-r border-gray-200 whitespace-nowrap gap-2 items-center justify-center font-semibold group text-lg text-black bg-white transition-all duration-500 hover:text-indigo-600">
                <svg
                  className="stroke-black transition-all duration-500 group-hover:stroke-indigo-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M5.5 5.5L16.5 16.5M16.5 5.5L5.5 16.5"
                    stroke=""
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </svg>
                Cancelar orden
              </button>
              <p className="font-medium text-lg text-gray-900 pl-6 py-3 max-lg:text-center">
                Pagado con tarjeta de crédito{" "}
                <span className="text-gray-500">terminando en 8822</span>
              </p>
            </div>
            <p className="font-semibold text-lg text-black py-6">
              Precio total:{" "}
              <span className="text-indigo-600"> {myOrder.total}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
