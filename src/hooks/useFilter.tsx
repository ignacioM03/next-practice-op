"use client";
import { useContext } from "react";
import { Product } from "@/types/ProductType.js";
import { FiltersContext } from "@/context/Filters";

export function useFilters() {
  const filtersContext = useContext(FiltersContext);

  if (!filtersContext) {
    return;
  }

  const { filters, setFilters } = filtersContext;

  const filteredProducts = (products: Product[]) => {
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

      if (
        filters.availability &&
        product.availability !== (filters.availability === "available")
      ) {
        return false;
      }
      return true;
    });
  };
  return { filters, filteredProducts, setFilters };
}
