"use client";
import { BlurryDivider } from "@/components/BlurryDivider/BlurryDivider";
import { Filters } from "@/components/Filter/Filter";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { useProductStore } from "@/store/Products";
import { Product } from "@/types/ProductType";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

export default function ProductsPage() {
  const products = useProductStore((state) => state.products);
  const [filters, setFilters] = useState({
    categoryFilter: "",
    priceFilter: "",
    title: "",
    availability: "",
  });
  const [disabled, setDisabled] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product: Product) => {
      if (
        filters.categoryFilter &&
        product.category !== filters.categoryFilter
      ) {
        return false;
      }

      if (
        filters.priceFilter &&
        product.price > parseFloat(filters.priceFilter)
      ) {
        return false;
      }

      if (
        filters.title &&
        !product.title.toLowerCase().includes(filters.title.toLowerCase())
      ) {
        return false;
      }

      // if (filters.availability && product.quantity !== (filters.availability === "available")) {
      //   return false;
      // }
      return true;
    });
  }, [filters, products]);

  useEffect(() => {
    products.some((product: Product) => product.id === 1)
      ? setDisabled(true)
      : setDisabled(false);
  }, [products]);
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Product Collection
          </h2>

          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <div className="mt-8 block lg:hidden">
          <button className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
            <span className="text-sm font-medium"> Filters & Sorting </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 rtl:rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>

        <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
          <Filters onChangeFilters={setFilters} />
          <div className="lg:col-span-3">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product: Product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <p className="font-bold text-4xl ">No products found</p>
              )}
            </ul>
          </div>
        </div>
      </div>
      <BlurryDivider />
    </section>
  );
}
