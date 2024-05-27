import { useOrderStore } from "@/store/OrderStore";
import React from "react";
import { OrderTr } from "../OrderTr/OrderTr";
import { CheckedIconSvg, IndicatorsSvg } from "../IconsSvg/IconsSvg";

type OrderTableProps = {
  handleOrder?: () => void;
  setOpen?: any;
  hidden?: boolean;
};

export const OrderTable = ({
  hidden,
  setOpen,
  handleOrder,
}: OrderTableProps) => {
  const orders = useOrderStore((state) => state.orders);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white font-[sans-serif]">
        <thead className="whitespace-nowrap">
          <tr>
            <th className="pl-6 w-8">
              <input id="checkbox1" type="checkbox" className="hidden peer" />
              <label
                htmlFor="checkbox1"
                className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
              >
                <CheckedIconSvg />
              </label>
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-black">
              #ID Orden
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-black">
              Estado
              <IndicatorsSvg />
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-black">
              Total
              <IndicatorsSvg />
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-black">
              #ID envio
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-black">
              Comprador
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-black">
              Total productos
              <IndicatorsSvg />
            </th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-black">
              +Info
            </th>
          </tr>
        </thead>
        <tbody className="whitespace-nowrap">
          {orders.map((order) => (
            <OrderTr
              key={order.id}
              order={order}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
