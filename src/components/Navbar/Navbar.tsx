"use client";
import { useAuth } from "@/context/UseAuth";
import Link from "next/link";
import { ProfileDropdown } from "../ProfileDropdown/ProfileDropdown";
import { useProductStore } from "@/store/Products";
import { Role } from "@/types/Role";
import { useCartStore } from "@/store/CartStore";
import {
  CartIconSvg,
  DropCategoryIconSvg,
  HomeDecorIconSvg,
  FavoriteIconSvg,
  SearchIconSvg,
  UserIconSvg,
  ElectronicIconSvg,
  ClothingIconSvg,
  ShoesIconSvg,
} from "../IconsSvg/IconsSvg";
import Image from "next/image";
import { useFavItems } from "@/context/FavItems";
import { useState } from "react";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  const items = useCartStore((state) => state.items);
  const { state } = useFavItems();
  const favItems = state.items.length;
  const enable = isAuthenticated && user?.role === Role.ADMIN;
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="shadow-md bg-white font-[sans-serif] tracking-wide relative z-50"
      hidden={enable}
    >
      <section className="flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]">
        {/* <div className="left-10 absolute z-50 bg-gray-100 flex px-4 py-3 rounded max-lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 192.904 192.904"
            width="20px"
            className="cursor-pointer fill-gray-400 mr-6 rotate-90 inline-block"
          >
            <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="outline-none bg-transparent w-full text-sm"
          />
        </div> */}
        <Link href="/" className="shrink-0">
          <Image
            src="https://readymadeui.com/readymadeui.svg"
            alt="logo"
            className="md:w-[170px] w-36"
            width={170}
            height={50}
          />
        </Link>
        <div className="lg:absolute lg:right-10 flex items-center ml-auto space-x-8">
          {isAuthenticated ? (
            <>
              <span className="relative">
                <CartIconSvg items={items} />
                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">
                  {items.length}
                </span>
              </span>
              <span className="relative">
                <FavoriteIconSvg favorites={favItems} />
                <span className="absolute left-auto -ml-1 top-0 rounded-full bg-black px-1 py-0 text-xs text-white">
                  {favItems}
                </span>
              </span>
              <div className="inline-block cursor-pointer border-gray-300">
                <ProfileDropdown user={user} logout={logout} />
              </div>
            </>
          ) : (
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
          )}
        </div>
      </section>
      <div className="flex flex-wrap justify-center px-10 py-3 relative">
        <div
          id="collapseMenu"
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50`}
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>
          <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-2/3 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="max-lg:border-b max-lg:pb-4 px-3 lg:hidden">
              <Link href="/">
                <Image
                  src="https://readymadeui.com/readymadeui.svg"
                  alt="logo"
                  className="w-36"
                  width={170}
                  height={50}
                />
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <Link
                href="/"
                className="hover:text-[#0d9488] text-[#0d9488] font-semibold block text-[15px]"
              >
                Home
              </Link>
            </li>
            <li className="group max-lg:border-b max-lg:px-3 max-lg:py-3 relative">
              <Link
                href="/products"
                className="hover:text-[#0d9488] hover:fill-[#0d9488] text-gray-600 font-semibold text-[15px] block"
              >
                categorias
                <DropCategoryIconSvg />
              </Link>
              <ul className="absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li className="border-b py-3">
                  <ElectronicIconSvg />
                </li>
                <li className="border-b py-3">
                  <HomeDecorIconSvg />
                </li>
                <li className="border-b py-3">
                  <ClothingIconSvg />
                </li>
                <li className="border-b py-3">
                  <ShoesIconSvg />
                </li>
              </ul>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <Link
                href="/products"
                className="hover:text-[#0d9488] text-gray-600 font-semibold text-[15px] block"
              >
                Productos
              </Link>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <Link
                href="/faqs"
                className="hover:text-[#0d9488] text-gray-600 font-semibold text-[15px] block"
              >
                Blog
              </Link>
            </li>
            {/* <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
              >
                Clothing
              </a>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
              >
                Bags
              </a>
            </li>
            <li className="max-lg:border-b max-lg:px-3 max-lg:py-3">
              <a
                href="javascript:void(0)"
                className="hover:text-[#007bff] text-gray-600 font-semibold text-[15px] block"
              >
                Watches
              </a>
            </li> */}
          </ul>
        </div>
        <button
          id="toggleMenu"
          className="lg:hidden flex items-center ml-auto space-x-2 z-50"
          onClick={handleClick}
        >
          <span className="text-sm">Menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 fill-black"
            viewBox="0 0 384 384"
          >
            <path
              d="M368 85.333H16C7.156 85.333 0 78.177 0 69.333S7.156 53.333 16 53.333h352c8.844 0 16 7.156 16 16s-7.156 16-16 16zM368 202.667H16C7.156 202.667 0 195.511 0 186.667s7.156-16 16-16h352c8.844 0 16 7.156 16 16s-7.156 16-16 16zM368 320H16c-8.844 0-16-7.156-16-16s7.156-16 16-16h352c8.844 0 16 7.156 16 16s-7.156 16-16 16z"
              data-original="#000000"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
