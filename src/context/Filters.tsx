"use client";
import { createContext, useState } from "react";

type ContextProps = {
  filters: any;
  setFilters: any;
};

export const FiltersContext = createContext<ContextProps | null>(null);

type Props = {
  children: React.ReactNode;
};

export function FiltersProvider({ children }: Props) {
  const [filters, setFilters] = useState({
    categoryFilter: "",
    priceFilter: "",
    title: "",
    availability: "",
  });
  return (
    <FiltersContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
