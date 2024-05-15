"use client";
import { UserType } from "@/types/UserType";
import Link from "next/link";
import { NewProductModal } from "../NewProductModal/NewProductModal";
import { useState } from "react";
import { useProductStore } from "@/store/Products";
import { ProductCard } from "../ProductCard/ProductCard";
import { useAuth } from "@/context/UseAuth";

type ProfileProps = {
  user: UserType | null;
};

export const StoreHero = ({ user }: ProfileProps) => {
  const [open, setOpen] = useState(true);
  const products = useProductStore((state) => state.products);

  const filterProducts = products.filter(
    (product) => product.userId === user?.id
  );

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className="container mx-auto bg-gray-50 my-1">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Bienvenido de nuevo, {user!.name}!
            </h1>

            <p className="mt-1.5 text-sm text-gray-500">
              Agreguemos una nueva publicación de productos!🎉
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <button
              className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
              type="button"
            >
              <span className="text-sm font-medium"> View Website </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </button>

            <button
              className="block rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-teal-700 focus:outline-none focus:ring"
              type="button"
              //href={"/products/new"}
              onClick={handleClick}
            >
              Agregar Producto
            </button>
            <button>
              <div className="" hidden={open}>
                <NewProductModal setOpen={handleClick} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 ">
        <h2 className="text-center text-xl font-bold">Mis Productos</h2>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          veniam dicta quisquam tenetur officiis nulla nobis earum sunt fugiat!
          Voluptas, dolorum? Incidunt enim ex architecto quod, provident
          expedita accusamus labore. Aliquid explicabo dignissimos quas.
          Expedita fuga doloremque perferendis iure officia, consequuntur
          minima! Nobis vero dignissimos doloribus quaerat quae rem, impedit
          debitis ullam voluptates quia similique. Possimus temporibus aliquid
          pariatur obcaecati, quasi voluptate nesciunt delectus est nihil odio
          excepturi optio quod fugiat consequatur saepe eos dolorem, alias
          similique. Repellendus magni deserunt tenetur ab vel veniam eius
          facilis qui, beatae deleniti earum neque dolorem porro ipsum ex
          molestias quas error. Libero, nostrum.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filterProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </header>
  );
};
