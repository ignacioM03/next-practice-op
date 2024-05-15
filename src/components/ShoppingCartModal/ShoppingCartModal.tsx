import { useFavItems } from "@/context/FavItems";
import React from "react";
import { FavItemCard } from "../FavItemCard/FavItemCard";
import { useRouter } from "next/navigation";

export const ShoppingCartModal = () => {
  const router = useRouter();
  const items = useFavItems().state.items;
  return (
    <div
      className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
    >
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-3.5 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 float-right"
          viewBox="0 0 320.591 320.591"
        >
          <path
            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
            data-original="#000000"
          ></path>
          <path
            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
            data-original="#000000"
          ></path>
        </svg>
        <h4 className="text-md font-bold text-black mt-6">
          {items.length} Items
        </h4>
        <div className="space-y-6 mt-6">
          {items.map((item) => (
            <FavItemCard key={item.id} item={item} />
          ))}
          <div className="flex">
            <span className="text-md font-bold text-black flex-1">Total</span>
            <span className="text-sm font-semibold text-black">$120.49</span>
          </div>
          <div className="flex max-sm:flex-col gap-4 !mt-8">
            <button
              type="button"
              className="px-6 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-black rounded-full"
            >
              Continue shopping
            </button>
            <button
              type="button"
              className="px-6 py-2.5 w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full"
              onClick={() => {
                router.push("/billing/checkout");
              }}
            >
              Check out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
