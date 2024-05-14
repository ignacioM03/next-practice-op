"use client";
import { useAuth } from "@/context/UseAuth";
import Link from "next/link";
import { ProfileDropdown } from "../ProfileDropdown/ProfileDropdown";
import { useProductStore } from "@/store/Products";
import { Role } from "@/types/Role";
import { useCartStore } from "@/store/CartStore";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const products = useProductStore((state) => state.products);
  const items = useCartStore((state) => state.items);
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
            </Link>
          </div>
          {isAuthenticated && user?.role === Role.USER  ? (
            <div className="md:flex md:items-center md:gap-12" hidden={true}>
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <Link
                    href="/products"
                    className="text-gray-500 transition hover:text-gray-500/75"
                  >
                    Productos
                  </Link>
                  {user?.role === Role.ADMIN ? (
                    <Link
                      href="/dashboard"
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      Dashoboard
                    </Link>
                  ) : (
                    <Link
                      href="/faqs"
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      Faqs
                    </Link>
                  )}
                  <Link
                    href="/products/cart"
                    className="flex justify-between ext-gray-500 transition hover:text-gray-500/75"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      strokeWidth={2}
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H13M19 15.5H17"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>{" "}
                        <path
                          d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                        ></path>{" "}
                        <path
                          d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                        ></path>{" "}
                        <path
                          d="M5 6H8M5.5 13H16.0218C16.9812 13 17.4609 13 17.8366 12.7523C18.2123 12.5045 18.4013 12.0636 18.7792 11.1818L19.2078 10.1818C20.0173 8.29294 20.4221 7.34853 19.9775 6.67426C19.5328 6 18.5054 6 16.4504 6H12"
                          stroke="#1C274C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        ></path>{" "}
                      </g>
                    </svg>
                    {items.length}
                  </Link>
                </ul>
              </nav>

              <div className="flex items-center gap-4">
                <div className="sm:flex sm:gap-4">
                  <ProfileDropdown logout={logout} user={user} />
                </div>
                <div className="block md:hidden">
                  <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            user?.role !== Role.ADMIN && (
              <div className="md:flex md:items-center md:gap-12">
                <nav aria-label="Global" className="hidden md:block">
                  <ul className="flex items-center gap-6 text-sm">
                    <Link
                      href="/products"
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      Productos
                    </Link>
                    <Link
                      href="/faqs"
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      Faqs
                    </Link>
                  </ul>
                </nav>

                <div className="flex items-center gap-4">
                  <div className="sm:flex sm:gap-4">
                    <Link
                      className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow"
                      href="/login"
                    >
                      Iniciar Sesion
                    </Link>

                    <div className="hidden sm:flex">
                      <Link
                        className="rounded-md px-5 py-2.5 text-sm font-medium text-teal-600 shadow"
                        href="/register"
                      >
                        Registro
                      </Link>
                    </div>
                  </div>

                  <div className="block md:hidden">
                    <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </header>
  );
}
