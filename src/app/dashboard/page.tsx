"use client";
import { StoreHero } from "@/components/StoreHero/StoreHero";
import { useAuth } from "@/context/authContext";

export default function DashboardPage() {
  const { user } = useAuth();
  return user ? (
    <StoreHero user={user} />
  ) : (
    <div className="container mx-auto mt-5">
      <p>Loading...</p>
    </div>
  );
}
