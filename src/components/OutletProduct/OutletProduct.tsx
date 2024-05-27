import { useProductStore } from "@/store/ProductStore";
import React from "react";
import { OutletProductCard } from "../OutletProductCard/OutletProductCard";

export const OutletProduct = () => {
  const products = useProductStore((state) => state.products);
  const outletProducts = products
    .filter((product) => product.outlet)
    .slice(0, 3);
  return (
    <div className="bg-white font-[sans-serif] my-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-teal-400 after:rounded-full">
            Productos destacados
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-md:max-w-lg mx-auto">
          {outletProducts.map((product) => (
            <OutletProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
