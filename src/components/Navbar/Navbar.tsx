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

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();
  //const products = useProductStore((state) => state.products);
  const items = useCartStore((state) => state.items);
  const { state } = useFavItems();
  const favItems = state.items.length;
  const enable = isAuthenticated && user?.role === Role.ADMIN;
  return (
    <header
      className="shadow-md bg-white font-[sans-serif] tracking-wide relative z-50"
      hidden={enable}
    >
      <section className="flex items-center flex-wrap lg:justify-center gap-4 py-3 sm:px-10 px-4 border-gray-200 border-b min-h-[75px]">
        {/* <div className="left-10 absolute z-50 bg-gray-100 flex px-4 py-3 rounded max-lg:hidden">
          <SearchIconSvg />
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
              <FavoriteIconSvg favorites={favItems}/>
              <CartIconSvg items={items} />{" "}
              <ProfileDropdown user={user} logout={logout} />
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
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50"
        >
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
                Categorias
                <DropCategoryIconSvg />
              </Link>
              <ul className="absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[250px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                <li className="border-b py-3">
                  <HomeDecorIconSvg />
                </li>
                <li className="border-b py-3">
                  <ElectronicIconSvg />
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
          </ul>
        </div>
      </div>
    </header>
  );
}
