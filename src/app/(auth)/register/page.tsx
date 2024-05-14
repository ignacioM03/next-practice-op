"use client";

import { useAuth } from "@/context/UseAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { RegisterType } from "@/types/RegisterType";
import { SubmitHandler, useForm } from "react-hook-form";
import { GoogleAuth } from "@/components/GoogleAuth/GoogleAuth";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterValidate } from "@/utils/validateForm";

export default function RegisterPage() {
  const router = useRouter();
  const { signUp } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RegisterType>({
    resolver: yupResolver(RegisterValidate),
  });
  const onSubmit: SubmitHandler<RegisterType> = async (data) => {
    const { username, name, password } = data;
    const res = await signUp({ name, username, password });
    if (res) router.push("/login");
  };
  return (
    <div className="flex justify-end ">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-9">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-teal-600 sm:text-3xl">
            Registrate en nuestra Store
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            className="mb-0 mt-8 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-center text-lg font-medium">Registrate ahora!</p>

            <div>
              <label htmlFor="name" className="sr-only">
                Nombre
              </label>

              <div className="relative">
                <input
                  type="name"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Ingrese su nombre"
                  id="name"
                  {...register("name", { required: true, maxLength: 30 })}
                />
              </div>
              {errors.name && (
                <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Ingrese su email"
                  id="email"
                  {...register("username", { required: true })}
                />

                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
              {errors.username && (
                <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                  {errors.username.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Ingrese su contraseña"
                  id="password"
                  {...register("password", { required: true })}
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
              {errors.password && (
                <p className="bg-red-400 p-2 mt-2 text-white-500 text-center rounded-md">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white"
            >
              Crear Cuenta
            </button>
            <GoogleAuth />
            <p className="text-center text-sm text-gray-500">
              tienes una cuenta?
              <Link className="underline" href="/login">
                Ingresa ahora!
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}