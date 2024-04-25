"use client";
import { StoreHero } from "@/components/StoreHero/StoreHero";
import { useAuth } from "@/context/UseAuth";

export default function DashboardPage() {
  const { user } = useAuth();
  return user ? (
    <StoreHero user={user} />
  ) : (
    <div className="container mx-auto">
      <p>Loading...</p>
    </div>
  );
}
