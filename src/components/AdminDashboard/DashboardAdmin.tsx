"use client"
import  { useState } from "react";
import { SideBar } from "../SideBar/SideBar";
import { UserType } from "@/types/UserType";
import DashboardPage from "@/app/dashboard/page";
import PricesPage from "@/app/dashboard/prices/page";
import OrdersPage from "@/app/dashboard/orders/page";
import ShoppingPage from "@/app/dashboard/shopping/page";
import ShippingPage from "@/app/dashboard/shipping/page";

type AdminDashboardProps = {
  user: UserType | null;
  page?: string;
  setCurrentPage?: (page: string) => void;
};

export const AdminDashboard = ({
  //setCurrentPage,
  page,
  user,
}: AdminDashboardProps) => {
  const [currentPage, setCurrentPage] = useState("dashboard");
  return (
    // <div className="container mt-0 mx-auto max-w-full">
    //   <div className="grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[120px_1fr] lg:gap-8 lg:[&:has(>*:first-child:hover)]:grid-cols-[160px_1fr]">
    //     <div className="h-32 rounded-lg bg-gray-200">

    //     </div>
    //     <div className="h-full rounded-lg bg-gray-200">

    //     </div>
    //   </div>
    // </div>
    /* <SideBar user={user} /> */
    /* <DashboardPage /> */
    <div className="grid grid-cols-1 gap-4 transition-[grid-template-columns] lg:grid-cols-[180px_1fr] lg:gap-8 lg:[&:has(>*:first-child:hover)]:grid-cols-[190px_1fr]">
      <div className="h-32 rounded-lg bg-gray-200">
        <SideBar user={user} setCurrentPage={setCurrentPage} />
      </div>
      <div className=" rounded-lg bg-gray-200">
        {currentPage === "dashboard" && <DashboardPage />}
        {currentPage === "prices" && <PricesPage />}
        {currentPage === "shopping" && <ShoppingPage />}
        {currentPage === "orders" && <OrdersPage />}
        {currentPage === "shipping" && <ShippingPage />}
      </div>
    </div>
  );
};
