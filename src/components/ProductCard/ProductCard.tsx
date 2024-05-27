import { useFavItems } from "@/context/favItemsContext";
import { useAuth } from "@/context/authContext";
import { HandleFavItemAction } from "@/hooks/FavItemReducer";
import { useCartStore } from "@/store/CartStore";
import { Product } from "@/types/ProductType";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useProductStore } from "@/store/ProductStore";

type Props = {
  product: Product;
};
export const ProductCard = ({ product }: Props) => {
  const { dispatch } = useFavItems();
  const addItem = useCartStore((state) => state.addItem);
  const items = useCartStore((state) => state.items);
  const [disabled, setDisabled] = useState(false);
  const products = useProductStore((state) => state.products);
  const updateProduct = useProductStore((state) => state.updateProduct);

  const addFavoriteItem = (item: Product) => {
    dispatch({ type: HandleFavItemAction.ADD_FAV_ITEM, payload: item });
  };

  const addToCart = (item: Product) => {
    const itemProduct = products.find(
      (product: Product) => product.id === item.id
    );
    if (item.quantity > 0) {
      const newItem = { ...item, quantity: 1 };
      const newItemProduct = {
        ...itemProduct,
        quantity: itemProduct.quantity - 1,
      };
      updateProduct(newItemProduct);
      if (itemProduct.quantity >= newItem.quantity) {
        addItem(newItem);
      }
    }
  };

  useEffect(() => {
    setDisabled(items.some((item: Product) => item.id === product.id));
  }, [items, product.id]);

  const { isAuthenticated } = useAuth();
  return (
    <div className="group relative block overflow-hidden text-white">
      <button
        className=" cursor-pointer absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
        onClick={() => {
          addFavoriteItem(product);
        }}
        disabled={!isAuthenticated}
      >
        <span className="sr-only">Wishlist</span>

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
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>
      <Link className="" href={`products/${product.id}`}>
        <Image
          src={product.image}
          alt=""
          className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          width={400}
          height={400}
        />
      </Link>

      <div className="relative border border-gray-100 bg-white p-6">
        <span className="whitespace-nowrap bg-teal-600 px-3 py-1.5 text-xs font-medium">
          {" "}
          Nuevo{" "}
        </span>

        <h3 className="mt-4 text-lg font-medium text-gray-900">
          {product.title}
        </h3>

        <p className="mt-1.5 text-sm text-gray-700">${product.price}</p>

        <div className="mt-4">
          <button
            className="block w-full rounded bg-teal-600 p-4 text-sm font-medium transition hover:scale-105"
            disabled={!isAuthenticated || disabled}
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
