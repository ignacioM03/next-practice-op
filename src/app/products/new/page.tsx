"use client";

import { useAuth } from "@/context/UseAuth";
import { useProductStore } from "@/store/Products";
import { Product } from "@/types/ProductType";

export default function NewProductPage() {
  const addProduct = useProductStore((state) => state.addProduct);
  const { user } = useAuth();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const product: Product = {
      title: e.target.title.value || "",
      image: e.target.image.value || "",
      price: e.target.price.value || "",
      quantity: e.target.quantity.value || "",
      description: e.target.description.value || "",
      category: "",
      id: Date.now().toString(),
      userId: user?.id,
    };
    addProduct(product);
  };
  return (
    <div className="container mx-auto">
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid mx-auto  lg:grid-cols-6">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="sr-only" htmlFor="title">
                    Nombre del producto
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Nombre del producto"
                    type="text"
                    id="title"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="image">
                      Imagen Url
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Url de la imagen"
                      type="text"
                      id="image"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="quantity">
                      Cantidad
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Cantidad"
                      type="number"
                      id="quantity"
                    />
                  </div>
                  <div>
                    <label className="sr-only" htmlFor="price">
                      Precio del producto
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Precio del producto"
                      type="text"
                      id="price"
                    />
                  </div>
                </div>

                {/* <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <label
                      htmlFor="Option1"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Option1"
                        type="radio"
                        tabIndex={-1}
                        name="option"
                      />

                      <span className="text-sm"> Option 1 </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option2"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Option2"
                        type="radio"
                        tabIndex={-1}
                        name="option"
                      />

                      <span className="text-sm"> Option 2 </span>
                    </label>
                  </div>

                  <div>
                    <label
                      htmlFor="Option3"
                      className="block w-full cursor-pointer rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black has-[:checked]:border-black has-[:checked]:bg-black has-[:checked]:text-white"
                      tabIndex={0}
                    >
                      <input
                        className="sr-only"
                        id="Option3"
                        type="radio"
                        tabIndex={-1}
                        name="option"
                      />

                      <span className="text-sm"> Option 3 </span>
                    </label>
                  </div>
                </div> */}

                <div>
                  <label className="sr-only" htmlFor="description">
                    Descripcion
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Descripcion del producto"
                    rows={8}
                    id="description"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-teal-600 px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Agregar producto
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
