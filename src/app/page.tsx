"use client";

import { SideMenu } from "@/components/SideMenu/SideMenu";
import { useAuth } from "@/context/UseAuth";

export default function Home() {
  const { user } = useAuth();
  const currentPage = "principal";
  return (
    <div className="">
      <SideMenu page={currentPage} user={user} />
    </div>
  );
}
