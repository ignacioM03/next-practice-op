"use client";

import { ProductCard } from "@/components/ProductCard/ProductCard";
import { SideMenu } from "@/components/SideMenu/SideMenu";
import { useAuth } from "@/context/UseAuth";
import { useProductStore } from "@/store/Products";
import { Product } from "@/types/ProductType";

export default function Home() {
  const products = useProductStore((state) => state.products);
  const { user } = useAuth();
  const currentPage = "principal";
  const userType = "user";
  return (
    <>
      <SideMenu page={currentPage} user={user} />
    </>
  );
}
