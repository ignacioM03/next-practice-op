"use client";
import { UserType } from "@/types/UserType";
import { AdminDashboard } from "../AdminDashboard/DashboardAdmin";
import { UserHome } from "../UserHome/UserHome";
import { useState } from "react";

type SideBarProps = {
  user: UserType | null;
  page?: string;
};

export const SideMenu = ({ page, user }: SideBarProps) => {
  const currenPage = "dashboard";
  const enable = user?.role === "admin";
  return (
    <>
      {user?.role === "admin" && (
        <AdminDashboard user={user} page={currenPage} />
      )}
      <UserHome page={currenPage} enable={enable} />
      {/* {user?.role === "user" ||
        (page === "principal" && (
          <UserHome page={currentPage} enable={enable} />
        ))} */}
      {/* {userType === "user" && page === "secundario" && <MenuSecundario />} */}
    </>
  );
};
