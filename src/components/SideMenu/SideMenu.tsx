"use client";
import { UserType } from "@/types/UserType";
import { AdminDashboard } from "../AdminDashboard/DashboardAdmin";

type SideBarProps = {
  user: UserType | null;
  page?: string;
};

export const SideMenu = ({ page, user }: SideBarProps) => {
  const currentPage = "dashboard";
  return (
    <>
      {user?.role === "admin" && <AdminDashboard user={user} page={currentPage}/>}
      {/* {user?.role === "user" && page === "principal" && <UserDashboard />} } */}
      {/* {userType === "user" && page === "secundario" && <MenuSecundario />} */}
    </>
  );
};
