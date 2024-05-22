import { useFavItems } from "@/context/favItemsContext";
import { HandleFavItemAction } from "@/hooks/FavItemReducer";
import { Product } from "@/types/ProductType";
import Image from "next/image";
import React from "react";

type FavItemProps = {
  item: Product;
};

export const FavItemCard = ({ item }: FavItemProps) => {
  const { dispatch } = useFavItems();

  const handleDelete = (id: string) => {
    dispatch({ type: HandleFavItemAction.REMOVE_FAV_ITEM, payload: id });
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex items-center">
        <Image
          src={item.image}
          className="w-16 h-16 p-2 shrink-0 bg-gray-100"
          width={100}
          height={100}
          alt=""
        />
        <div className="ml-4">
          <p className="text-sm text-black">{item.title}</p>
          <p className="text-gray-400 text-xs mt-1">{item.quantity} Item</p>
        </div>
      </div>
      <div>
        <span className="text-sm font-semibold text-black mr-5">
          ${item.price}
        </span>
        <button onClick={() => handleDelete(item.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 fill-red-500 inline cursor-pointer"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"
              data-original="#000000"
            ></path>
            <path
              d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"
              data-original="#000000"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
