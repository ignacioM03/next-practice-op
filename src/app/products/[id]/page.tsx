"use client";
import { useFavItems } from "@/context/favItemsContext";
import { useAuth } from "@/context/authContext";
import { HandleFavItemAction } from "@/hooks/FavItemReducer";
import { useCartStore } from "@/store/CartStore";
import { useProductStore } from "@/store/ProductStore";
import { Product } from "@/types/ProductType";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  CommentsIconSvg,
  FacebookIconSvg,
  StartIconSvg,
  TwitterIconSvg,
} from "@/components/IconsSvg/IconsSvg";

export default function ProductPage() {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const { dispatch } = useFavItems();
  const [quantity, setQuantity] = useState(1);
  const [disabled, setDisabled] = useState(false);
  const addItem = useCartStore((state) => state.addItem);
  const product = useProductStore((state) => state.getProduct(id));
  const updateProduct = useProductStore((state) => state.updateProduct);
  const items = useCartStore((state) => state.items);

  const handleAddItem = () => {
    if (product) {
      setDisabled(true);
      const newItem = {
        ...product,
        quantity: quantity,
      };
      if (product.quantity >= newItem.quantity) {
        const newItemProduct = {
          ...product,
          quantity: product.quantity - newItem.quantity,
        };
        updateProduct(newItemProduct);
        addItem(newItem);
      }
    }
    setDisabled(false);
  };


  useEffect(() => {
    setDisabled(items.some((item: Product) => item.id === product.id));
  }, [items, product.id]);
  const addFavoriteItem = (item: Product) => {
    dispatch({ type: HandleFavItemAction.ADD_FAV_ITEM, payload: item });
  };
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.image}
            width={400}
            height={400}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              NOMBRE DE LA MARCA
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product?.title}
            </h1>
            <div className="flex mb-4">
              <StartIconSvg />
              <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                <FacebookIconSvg />
                <TwitterIconSvg />
                <CommentsIconSvg />
              </span>
            </div>
            <p className="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              {/* <div className="flex">
                <span className="mr-3">Color</span>
                <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
              </div> */}
              <div className="flex ml-6 items-center">
                <span className="mr-3">Cantidad</span>
                <div className="relative">
                  <select
                    className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                    onChange={(e) => setQuantity(parseInt(e.target.value))}
                  >
                    <option value={"1"}>1</option>
                    <option value={"2"}>2</option>
                    <option value={"3"}>3</option>
                    <option value={"4"}>4</option>
                  </select>
                  <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <button
                className="flex ml-auto text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-600 rounded"
                disabled={!isAuthenticated || disabled}
                onClick={() => handleAddItem()}
              >
                Agregar al carrito
              </button>
              <button
                className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
                disabled={!isAuthenticated}
                onClick={() => {
                  addFavoriteItem(product);
                }}
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
