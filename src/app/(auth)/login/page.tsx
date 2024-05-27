"use client";

import { useAuth } from "@/context/authContext";
import { LoginType } from "@/types/LoginType";
import { Role } from "@/types/Role";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

type SignInErrorsType = {
  message: string;
};

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginType>({});
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    const { username, password } = data;
    const response = await axios.post("/api/auth/login", {
      username,
      password,
    });
    const res = await login({ username, password });
    if (res === undefined) return;
    const user = {
      ...(res || {}),
      role: Role.ADMIN,
    };

    user.role === Role.ADMIN ? router.push("/") : router.push("/products");
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const res = await signIn("google", {
        callbackUrl: "http://localhost:3000/",
        redirect: false,
      });
      if (res?.ok) {
        router.push("/");
      } else {
        console.log("Error signing in with Google:", res?.error);
      }
    } catch (error) {
      console.error("Error signing in with Google:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-end ">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 mt-9">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-teal-600 sm:text-3xl">
            Iniciar Sesion
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            className="mb-0 mt-8 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <p className="text-center text-lg font-medium">
              Ingresa con tu cuenta
            </p>

            <div>
              <label htmlFor="username" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter email"
                  id="username"
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
                  Username o Email requerido
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
                  placeholder="Enter password"
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
                  Contraseña requerida
                </p>
              )}
            </div>
            <button
              type="submit"
              className="block w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white"
            >
              Iniciar Sesion
            </button>
            <button
              type="button"
              onClick={handleGoogleSignIn}
              disabled={loading}
              className="block w-full rounded-lg bg-teal-600 px-5 py-3 text-sm font-medium text-white max-w-sm mx-auto"
            >
              {loading ? "Signing in..." : "Sign in with Google"}
            </button>
            <p className="text-center text-sm text-gray-500">
              No tienes cuenta?
              <Link className="underline" href="/register">
                Registrate
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
