"use client";
import { useAuth } from "@/context/authContext";
import { productCategories } from "@/enums/ProductCategory";
import { useProductStore } from "@/store/Products";
import { Product } from "@/types/ProductType";
import { ProductValidate } from "@/utils/validateForm";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ModalProps = {
  setOpen: any;
  product?: Product;
};
export const NewProductModal = ({ product, setOpen }: ModalProps) => {
  const { id } = useParams();
  const [countSelected, setCountSelected] = useState(0);
  const [categories] = useState(productCategories);
  const addProduct = useProductStore((state) => state.addProduct);
  const onEdit = useProductStore((state) => state.updateProduct);
  const { user } = useAuth();

  const handleModalClick = (e: any) => {
    e.stopPropagation();
  };

  const handleChangeCategory = (event: any) => {
    //const category = event.target.value;
    const isChecked = event.target.checked;
    if (isChecked) {
      setCountSelected(countSelected + 1);
    } else {
      setCountSelected(countSelected - 1);
    }
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ProductValidate),
  });

  const onSubmit: SubmitHandler<Product> = (data) => {
    if (product) {
      const body = {
        ...data,
        category: data.category!.toString(),
        id: product.id,
        userId: user?.id,
        sales: 0,
        createdAt: product.createdAt,
        updatedAt: new Date(),
        updatedBy: user?.name,
      };
      onEdit(body);
    } else {
      const body = {
        ...data,
        category: data.category!.toString(),
        id: Date.now().toString(),
        userId: user?.id,
        sales: 0,
        createdAt: new Date(),
      };
      addProduct(body);
      reset();
    }
  };

  return (
    <button
      className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000]   before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]"
      onClick={handleModalClick}
    >
      <button
        className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h4 className="text-md font-bold text-black mt-6">Items</h4>
        <div className="space-y-6 mt-6">
          <form
            onSubmit={handleSubmit(onSubmit)}
            action=""
            className="lg:p-16 p-6"
          >
            <div className="relative mb-6">
              <label
                htmlFor="title"
                className="flex  items-center mb-2 text-gray-600 text-sm font-medium"
              >
                Nombre del producto{" "}
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="text"
                id="title"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                placeholder="Nombre..."
                defaultValue={product?.title}
                {...register("title", { required: true, maxLength: 30 })}
              />
              {errors.title && (
                <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div className="relative mb-6">
              <label
                htmlFor="description"
                className="flex  items-center mb-2 text-gray-600 text-sm font-medium"
              >
                Descripción{" "}
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="text"
                id="description"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                placeholder="Descripcion ..."
                defaultValue={product?.description}
                {...register("description", { required: true, maxLength: 30 })}
              />
              {errors.description && (
                <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div className="relative mb-6">
              <label
                htmlFor="price"
                className="flex  items-center mb-2 text-gray-600 text-sm font-medium"
              >
                Precio{" "}
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="number"
                id="price"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                placeholder="Precio..."
                defaultValue={product?.price}
                {...register("price", { required: true, maxLength: 4 })}
              />
              {errors.price && (
                <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                  {errors.price.message}
                </p>
              )}
            </div>
            <div className="relative mb-6">
              <label
                htmlFor="quantity"
                className="flex  items-center mb-2 text-gray-600 text-sm font-medium"
              >
                Cantidad{" "}
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="number"
                id="quantity"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                placeholder="Cantidad..."
                defaultValue={product?.quantity}
                {...register("quantity", { required: true, maxLength: 4 })}
              />
              {errors.quantity && (
                <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                  {errors.quantity.message}
                </p>
              )}
            </div>
            <div className="relative mb-6">
              <label
                htmlFor="image"
                className="flex  items-center mb-2 text-gray-600 text-sm font-medium"
              >
                Imagen del producto{" "}
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <input
                type="text"
                id="image"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                placeholder="Imagen..."
                defaultValue={product?.image}
                {...register("image", { required: true })}
              />
              {errors.image && (
                <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                  {errors.image.message}
                </p>
              )}
            </div>
            <div className="relative mb-6">
              <label
                htmlFor="category"
                className="flex  items-center mb-2 text-gray-600 text-sm font-medium"
              >
                <svg
                  width="7"
                  height="7"
                  className="ml-1"
                  viewBox="0 0 7 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                    fill="#EF4444"
                  />
                </svg>
              </label>
              <details className="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition">
                  <span className="text-sm font-medium"> Categoria </span>

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
                      {countSelected} Selected{" "}
                    </span>

                    <button
                      type="button"
                      className="text-sm text-gray-900 underline underline-offset-4"
                      //onClick={reset}
                    >
                      Reset
                    </button>
                  </header>

                  <ul className="space-y-1 border-t border-gray-200 p-4">
                    {categories.map((category: any) => (
                      <li key={category}>
                        <label
                          htmlFor={"category"}
                          className="inline-flex items-center gap-2"
                        >
                          <input
                            type="checkbox"
                            id="category"
                            className="size-5 rounded border-gray-300"
                            //key={category}
                            value={category}
                            {...register(`category`, {
                              required: true,
                            })}
                            onClick={handleChangeCategory}
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
              {errors.category && (
                <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                  {errors.category.message}
                </p>
              )}
            </div>
            <div className="flex max-sm:flex-col gap-4 !mt-8">
              <button
                type="button"
                className="px-6 py-2.5 w-full bg-gray-200 hover:bg-gray-300 text-black rounded-full"
                onClick={setOpen}
              >
                Cancelar
              </button>
              {product ? (
                <button
                  type="submit"
                  className="px-6 py-2.5 w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full"
                >
                  Actualizar Producto
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2.5 w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full"
                >
                  Agregar Producto
                </button>
              )}
            </div>
          </form>
        </div>
      </button>
    </button>
  );
};
