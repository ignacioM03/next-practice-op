"use client";
import { useAuth } from "@/context/UseAuth";
import { useProductStore } from "@/store/Products";
import { Product } from "@/types/ProductType";
import { ProductValidate } from "@/utils/validateForm";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type ModalProps = {
  setOpen: any;
};
export const NewProductModal = ({ setOpen }: ModalProps) => {
  const addProduct = useProductStore((state) => state.addProduct);
  
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ProductValidate),
  });
  const { user } = useAuth();
  const onSubmit: SubmitHandler<Product> = (data) => {
    const body = {
      ...data,
      userId: user?.id,
      id: Date.now().toString(),
    };
    addProduct(body);
    console.log(body);
  };

  return (
    <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
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
                placeholder="Name..."
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
                Categoria del producto{" "}
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
                id="category"
                className="block w-full h-11 px-5 py-2.5 bg-white leading-7 text-base font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none "
                placeholder="Categoria"
                {...register("category", { required: true })}
              />
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
              <button
                type="submit"
                className="px-6 py-2.5 w-full bg-teal-600 hover:bg-teal-700 text-white rounded-full"
              >
                Agregar Producto
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
