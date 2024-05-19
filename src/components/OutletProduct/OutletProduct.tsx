import { useProductStore } from "@/store/Products";
import React from "react";
import { OutletProductCard } from "../OutletProductCard/OutletProductCard";

export const OutletProduct = () => {
  const products = useProductStore((state) => state.products);
  const outletProducts = products

    .filter((product) => product.outlet)
    .slice(0, 3);
  return (
    // <div classNameName="bg-gray-100 md:px-10 px-4 py-12 font-[sans-serif]">
    //   <div classNameName="container mx-auto">
    //     <h2 classNameName="text-3xl font-extrabold text-gray-800 mb-8">
    //       Productos destacados
    //     </h2>
    //     <div classNameName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    //       {outletProducts.map((product) => (
    //         <OutletProductCard key={product.id} product={product} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="bg-white font-[sans-serif] my-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#333] inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">
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
