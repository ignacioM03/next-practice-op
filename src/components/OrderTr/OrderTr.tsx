import { OrderType } from "@/types/OrderType";
import React from "react";
import { StarIconSvg } from "../IconsSvg/IconsSvg";
import { OrderSummaryCheck } from "../OrderSummaryCheck/OrderSummaryCheck";
import Image from "next/image";

type OrderTrProps = {
  order: OrderType;
  handleOrder: () => void;
  setOpen: any;
  hidden: boolean;
};

export const OrderTr = ({
  hidden,
  setOpen,
  handleOrder,
  order,
}: OrderTrProps) => {
  return (
    <tr className="odd:bg-blue-50">
      <td className="pl-6 w-8">
        <input id="checkbox2" type="checkbox" className="hidden peer" />
        <label
          htmlFor="checkbox2"
          className="relative flex items-center justify-center p-0.5 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer bg-blue-500 border border-gray-400 rounded overflow-hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full fill-white"
            viewBox="0 0 520 520"
          >
            <path
              d="M79.423 240.755a47.529 47.529 0 0 0-36.737 77.522l120.73 147.894a43.136 43.136 0 0 0 36.066 16.009c14.654-.787 27.884-8.626 36.319-21.515L486.588 56.773a6.13 6.13 0 0 1 .128-.2c2.353-3.613 1.59-10.773-3.267-15.271a13.321 13.321 0 0 0-19.362 1.343q-.135.166-.278.327L210.887 328.736a10.961 10.961 0 0 1-15.585.843l-83.94-76.386a47.319 47.319 0 0 0-31.939-12.438z"
              data-name="7-Check"
              data-original="#000000"
            />
          </svg>
        </label>
      </td>
      <td className="px-6 py-4 text-sm">{order.id}</td>
      <td className="px-6 py-4 text-sm">
        {order.status === "approved" ? (
          <span className="w-[68px] block text-center py-0.5 border-2 border-green-500 text-green-500 font-semibold rounded text-xs">
            {order.status}
          </span>
        ) : (
          <span className="w-[68px] block text-center py-0.5 border-2 border-red-500 text-red-500 font-semibold rounded text-xs">
            {order.status}
          </span>
        )}
      </td>
      <td className="px-6 py-4 text-sm">${order.total}</td>
      <td className="px-6 py-4 text-sm">{order.shippingId}</td>
      <td className="px-6 py-4 text-sm">
        <div className="flex items-center cursor-pointer">
          <Image
            src={order.user.profilePicture}
            className="w-7 h-7 rounded-full shrink-0"
            alt=""
            width={28}
            height={28}
          />
          <div className="ml-2">
            <p className="text-sm text-black">{order.user.name}</p>
          </div>
        </div>
      </td>
      <td className="px-6 py-4">{order.items.length}</td>
      <td className="px-6 py-4">
        <button onClick={handleOrder}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 cursor-pointer fill-gray-400"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="2" data-original="#000000" />
            <circle cx="4" cy="12" r="2" data-original="#000000" />
            <circle cx="20" cy="12" r="2" data-original="#000000" />
          </svg>
          <div className="" hidden={hidden}>
            <OrderSummaryCheck setOpen={setOpen} order={order} />
          </div>
        </button>
      </td>
    </tr>
  );
};
