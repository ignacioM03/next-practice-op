"use client";
import { productCategories } from "@/enums/ProductCategory";
import { useFilters } from "@/hooks/useFilter";
import { useState } from "react";

export const Filters = () => {
  const [countSelected, setCountSelected] = useState(0);
  const [categories] = useState(productCategories);
  const { filters, setFilters, reset } = useFilters() ?? {};

  const handleChangeMaxPrice = (event: any) => {
    setFilters({ maxPrice: event.target.value });
  };

  const handleChangeMinPrice = (event: any) => {
    setFilters({ minPrice: event.target.value });
  };

  const handleChangeCategory = (event: any) => {
    const category = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setFilters({ categoryFilter: category });
      setCountSelected(countSelected + 1);
    } else {
      setFilters({ categoryFilter: "" });
      setCountSelected(countSelected - 1);
    }
  };

  const handleChangeTitle = (event: any) => {
    setFilters((prevState: any) => {
      return { ...prevState, title: event.target.value };
    });
  };

  return (
    <div className="hidden space-y-4 lg:block">
      <div>
        <label
          htmlFor={filters.title}
          className="block text-xs font-medium text-gray-700"
        >
          {" "}
          Ordenar por{" "}
        </label>

        <select
          id={filters.title}
          className="mt-1 rounded border-gray-300 text-sm"
          onChange={handleChangeTitle}
        >
          <option value={"all"}>Ordenar por</option>
          <option value="Title, DESC">Título, DESC</option>
          <option value="Title, ASC">Título, ASC</option>
          <option value="Price, DESC">Precio, DESC</option>
          <option value="Price, ASC">Precio, ASC</option>
        </select>
      </div>

      <div>
        <p className="block text-xs font-medium text-gray-700">Filtros</p>

        <div className="mt-1 space-y-2">
          <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Disponibilidad </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700"> 0 Seleccionado </span>

                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                  onClick={reset}
                >
                  Reiniciar
                </button>
              </header>

              <ul className="space-y-1 border-t border-gray-200 p-4">
                <li>
                  <label
                    htmlFor="FilterInStock"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterInStock"
                      className="size-5 rounded border-gray-300"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      En stock (5+){" "}
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterPreOrder"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterPreOrder"
                      className="size-5 rounded border-gray-300"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Pre Order (3+){" "}
                    </span>
                  </label>
                </li>

                <li>
                  <label
                    htmlFor="FilterOutOfStock"
                    className="inline-flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      id="FilterOutOfStock"
                      className="size-5 rounded border-gray-300"
                    />

                    <span className="text-sm font-medium text-gray-700">
                      {" "}
                      Agotado (10+){" "}
                    </span>
                  </label>
                </li>
              </ul>
            </div>
          </details>

          <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Precio </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700">
                  {" "}
                  El precio más alto es $600.{" "}
                </span>

                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                  onClick={reset}
                >
                  Reiniciar
                </button>
              </header>

              <div className="border-t border-gray-200 p-4">
                <div className="flex justify-between gap-4">
                  <label
                    htmlFor={filters.minPrice}
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm text-gray-600">$</span>

                    <input
                      type="number"
                      id={filters.minPrice}
                      placeholder="From"
                      className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      onChange={handleChangeMinPrice}
                    />
                  </label>

                  <label
                    htmlFor={filters.maxPrice}
                    className="flex items-center gap-2"
                  >
                    <span className="text-sm text-gray-600">$</span>

                    <input
                      type="number"
                      id={filters.maxPrice}
                      placeholder="To"
                      className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      onChange={handleChangeMaxPrice}
                    />
                  </label>
                </div>
              </div>
            </div>
          </details>

          <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
              <span className="text-sm font-medium"> Categorías </span>

              <span className="transition group-open:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </summary>

            <div className="border-t border-gray-200 bg-white">
              <header className="flex items-center justify-between p-4">
                <span className="text-sm text-gray-700">
                  {" "}
                  {countSelected} Seleccionado{" "}
                </span>

                <button
                  type="button"
                  className="text-sm text-gray-900 underline underline-offset-4"
                  onClick={reset}
                >
                  Reiniciar
                </button>
              </header>

              <ul className="space-y-1 border-t border-gray-200 p-4">
                {categories.map((category) => (
                  <li key={category}>
                    <label
                      htmlFor={filters.categoryFilter}
                      className="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id={filters.categoryFilter}
                        className="size-5 rounded border-gray-300"
                        value={category}
                        onChange={handleChangeCategory}
                      />

                      <span className="text-sm font-medium text-gray-700">
                        {" "}
                        {category}{" "}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
};
