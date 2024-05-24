"use client";

import { ProgressBar } from "@/components/ProgressBar/ProgressBar";
import { useFavItems } from "@/context/favItemsContext";
import { useAuth } from "@/context/authContext";
import { useCartStore } from "@/store/CartStore";
import { useOrderStore } from "@/store/OrderStore";
import { Product } from "@/types/ProductType";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { CardType } from "@/services/Models/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { CheckoutValidate } from "@/utils/validateForm";

export default function CheckoutPage() {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [hidden, setHidden] = useState(true);
  const addOrder = useOrderStore((state) => state.addOrder);
  const items = useCartStore((state) => state.items);
  const favItems = useFavItems().state.items;
  const clearCart = useCartStore((state) => state.clearCart);
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(CheckoutValidate),
  });

  const totalOrder = items.length
    ? items.reduce(
        (total: number, item: Product) =>
          total + parseFloat((item.price * item.quantity).toString()),
        0
      )
    : favItems.reduce(
        (total: number, item: Product) =>
          total + parseFloat((item.price * item.quantity).toString()),
        0
      );

  const handleCreateOrder = () => {
    addOrder({
      id: Date.now().toString(),
      user: user,
      items: items,
      total: totalOrder,
      status: "pending",
      createdAt: new Date(),
    });
  };
  const onSubmit: SubmitHandler<CardType> = async (data) => {
    handleCreateOrder();
    setTimeout(() => {
      setHidden(false);
      setLoading(false);
      reset();
      clearCart();
    }, 3000);
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
        <form className="mt-12" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-bold text-[#333]">
                Detalles Personales
              </h3>
            </div>
            <div className="md:col-span-2">
              <div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="">
                    <input
                      type="text"
                      placeholder="First name"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      id="name"
                      defaultValue={user?.name}
                      {...register("name", { required: false })}
                    />
                    {errors.name && (
                      <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Last name"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      defaultValue={user?.username}
                    />
                  </div>
                  <div className="">
                    <input
                      type="email"
                      placeholder="Email address"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      id="email"
                      defaultValue={user?.email}
                      {...register("email", { required: false })}
                    />
                    {errors.email && (
                      <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Phone number"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      defaultValue={user?.phone}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div>
              <h3 className="text-xl font-bold text-[#333]">
                Dirección de envio
              </h3>
            </div>
            <div className="md:col-span-2">
              <div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="">
                    <input
                      type="text"
                      placeholder="Street address"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      id="address_line1"
                      {...register("address_line1", { required: false })}
                      defaultValue={user?.address.street}
                    />
                    {errors.address_line1 && (
                      <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                        {errors.address_zip.message}
                      </p>
                    )}
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="City"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      id="address_city"
                      defaultValue={user?.address.city}
                      {...register("address_city", { required: false })}
                    />
                    {errors.address_city && (
                      <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                        {errors.address_city.message}
                      </p>
                    )}
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="State"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      id="address_suite"
                      defaultValue={user?.address.suite}
                    />
                  </div>
                  <div className="">
                    <input
                      type="text"
                      placeholder="Zip Code"
                      className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                      defaultValue={user?.address.zipcode}
                      id="address_zip"
                      {...register("address_zip", { required: false })}
                    />
                    {errors.address_zip && (
                      <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                        {errors.address_zip.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
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
                    name="card"
                    defaultChecked
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
                    type="text"
                    placeholder="Card number"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    id="cardNumber"
                    {...register("cardNumber", { required: false })}
                  />
                  {errors.cardNumber && (
                    <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                      {errors.cardNumber.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <input
                    type="text"
                    placeholder="EXP."
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    id="expire"
                    {...register("expire", { required: false })}
                  />
                  {errors.expire && (
                    <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                      {errors.expire.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <input
                    type="number"
                    placeholder="CVV"
                    className="px-4 py-3.5 bg-white text-[#333] w-full text-sm border-2 rounded-md focus:border-blue-500 outline-none"
                    {...register("cvc", { required: false })}
                  />
                  {errors.cvc && (
                    <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                      {errors.cvc.message}
                    </p>
                  )}
                </div>
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
              type="submit"
              className="px-6 py-3.5 text-sm bg-teal-600 text-white rounded-md hover:bg-teal-700"
            >
              Pagar ahora
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
