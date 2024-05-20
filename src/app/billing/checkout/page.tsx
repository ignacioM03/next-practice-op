"use client";

import { ProgressBar } from "@/components/ProgressBar/ProgressBar";
import { useFavItems } from "@/context/FavItems";
import { useAuth } from "@/context/UseAuth";
import { useCartStore } from "@/store/CartStore";
import { useOrderStore } from "@/store/OrderStore";
import { Product } from "@/types/ProductType";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(true);
  const addOrder = useOrderStore((state) => state.addOrder);
  const items = useCartStore((state) => state.items);
  const favItems = useFavItems().state.items;
  const clearCart = useCartStore((state) => state.clearCart);
  const router = useRouter();

  const totalOrder = items.length
    ? items.reduce(
        (total: number, item: Product) =>
          total + parseFloat((item.price * item.quantity!).toString()),
        0
      )
    : favItems.reduce(
        (total: number, item: Product) =>
          total + parseFloat((item.price * item.quantity!).toString()),
        0
      );

  const handleCreateOrder = () => {
    addOrder({
      id: Date.now().toString(),
      user: user!,
      items: items,
      total: totalOrder,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("submit");
    handleCreateOrder();
    clearCart();
    setTimeout(() => {
      setHidden(false);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="font-[sans-serif] bg-white p-4 mt-5">
      <div className="" hidden={hidden}>
        <ProgressBar loading={loading} />
      </div>
      <div className="max-w-4xl mx-auto" hidden={!hidden}>
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#333] inline-block border-b-4 border-[#333] pb-1">
            Verificar Pago
          </h2>
        </div>
        <div className="mt-12">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#333]">
                Detalles Personales
              </h3>
            </div>
            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="First name"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    value={user?.name}
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    value={user?.username}
                  />
                  <input
                    type="email"
                    placeholder="Email address"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    value={user?.email}
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    value={user?.phone}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div>
              <h3 className="text-xl font-bold text-[#333]">
                Dirección de envio
              </h3>
            </div>
            <div className="md:col-span-2">
              <form>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    placeholder="Street address"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    value={user?.address.street}
                  />
                  <input
                    type="text"
                    placeholder="City"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    value={user?.address.city}
                  />
                  <input
                    type="text"
                    placeholder="State"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    value={user?.address.suite}
                  />
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    value={user?.address.zipcode}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div>
              <h3 className="text-xl font-bold text-[#333]">Método de pago</h3>
            </div>
            <div className="md:col-span-2">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="card"
                    checked
                  />
                  <label
                    htmlFor="card"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <Image
                      src="https://readymadeui.com/images/visa.webp"
                      className="w-12"
                      alt="card1"
                      width={100}
                      height={100}
                    />
                    <Image
                      src="https://readymadeui.com/images/american-express.webp"
                      className="w-12"
                      alt="card2"
                      width={100}
                      height={100}
                    />
                    <Image
                      src="https://readymadeui.com/images/master.webp"
                      className="w-12"
                      alt="card3"
                      width={100}
                      height={100}
                    />
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    className="w-5 h-5 cursor-pointer"
                    id="paypal"
                  />
                  <label
                    htmlFor="paypal"
                    className="ml-4 flex gap-2 cursor-pointer"
                  >
                    <Image
                      src="https://readymadeui.com/images/paypal.webp"
                      className="w-20"
                      alt="paypalCard"
                      width={100}
                      height={100}
                    />
                  </label>
                </div>
              </div>
              <div className="grid sm:grid-cols-4 gap-6 mt-6">
                <div className="col-span-2">
                  <input
                    type="number"
                    placeholder="Card number"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                  />
                </div>
                <input
                  type="number"
                  placeholder="EXP."
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                />
                <input
                  type="number"
                  placeholder="CVV"
                  className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-end gap-4 mt-12">
            <button
              type="button"
              className="px-6 py-3.5 text-sm bg-transparent border-2 text-[#333] rounded-md hover:bg-gray-100"
              onClick={() => router.back()}
            >
              Paga después
            </button>
            <button
              type="button"
              className="px-6 py-3.5 text-sm bg-teal-600 text-white rounded-md hover:bg-teal-700"
              onClick={handleSubmit}
            >
              Pagar ahora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
