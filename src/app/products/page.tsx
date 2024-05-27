"use client";
import { BlurryDivider } from "@/components/BlurryDivider/BlurryDivider";
import { Filters } from "@/components/Filter/Filter";
import { ProductCard } from "@/components/ProductCard/ProductCard";
import { useFilters } from "@/hooks/useFilter";
import { useProductStore } from "@/store/ProductStore";
import { Product } from "@/types/ProductType";

export default function ProductsPage() {
  const products = useProductStore((state) => state.products);
  const { filteredProducts } = useFilters() ?? {};
  const filters = filteredProducts(products);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            Colección de productos
          </h2>

          <p className="mt-4 max-w-md text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
            praesentium cumque iure dicta incidunt est ipsam, officia dolor
            fugit natus?
          </p>
        </header>

        <div className="mt-8 block lg:hidden">
          <button
            className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
            onClick={() => {
              console.log("sasdas");
            }}
          >
            <span className="text-sm font-medium">
              {" "}
              Filtros y clasificación{" "}
            </span>
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
          <Filters />
          <div className="lg:col-span-3">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filters.length > 0 ? (
                filters
                  .slice(0, 10)
                  .map((product: Product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
              ) : (
                <p className="font-bold text-4xl ">
                  No se encontraron productos
                </p>
              )}
            </ul>
          </div>
        </div>
      </div>
      <BlurryDivider text="Ver todos los productos" />
    </section>
  );
}
