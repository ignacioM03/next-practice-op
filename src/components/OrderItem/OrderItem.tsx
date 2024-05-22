import { Product } from "@/types/ProductType";
import Image from "next/image";
import React from "react";

type OrderItemProps = {
  item: Product;
};
export const OrderItem = ({ item }: OrderItemProps) => {
  return (
    <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
      <div className="pb-4 md:pb-8 w-full md:w-40">
        <Image
          className="w-full hidden md:block"
          src={item.image}
          alt="dress"
          width={400}
          height={400}
        />
        <Image
          className="w-full md:hidden"
          src={item.image}
          alt="dress"
          width={400}
          height={400}
        />
      </div>
      <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
        <div className="w-full flex flex-col justify-start items-start space-y-8">
          <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">
            {item.title}
          </h3>
          <div className="flex justify-start items-start flex-col space-y-2">
            <p className="text-sm dark:text-white leading-none text-gray-800">
              <span className="dark:text-gray-400 text-gray-300">
                Categoria:{" "}
              </span>{" "}
              {item.category}
            </p>
            <p className="text-sm dark:text-white leading-none text-gray-800">
              <span className="dark:text-gray-400 text-gray-300">Desc: </span>{" "}
              {item.description}
            </p>
            <p className="text-sm dark:text-white leading-none text-gray-800">
              <span className="dark:text-gray-400 text-gray-300">Rating: </span>{" "}
              {item.rating}
            </p>
          </div>
        </div>
        <div className="flex justify-between space-x-8 items-start w-full">
          <p className="text-base dark:text-white xl:text-lg leading-6">
            ${item.price}{" "}
            <span className="text-red-300 line-through">
              {" "}
              ${item.discountPercentage}
            </span>
          </p>
          <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">
            {item.quantity}
          </p>
          <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">
            ${item.price * item.quantity!}
          </p>
        </div>
      </div>
    </div>
  );
};
