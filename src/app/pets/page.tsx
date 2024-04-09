"use client";
import { Pagination } from "@/components/Pagination/Pagination";
import { PetCard } from "@/components/PetCart/PetCard";
import { usePetStore } from "@/store/petStore";
import { useEffect } from "react";

export default function PetsPage() {
  const { pets } = usePetStore();
  const { getPets } = usePetStore();

  useEffect(() => {
    getPets();
  }, []);

  return (
    <div className="container justify-center">
      <h1>Pets</h1>
      <div className="grid gap-4 grid-cols-3 grid-rows-3">
        {pets.length > 0
          ? pets.map((pet: any) => <PetCard key={pet.id} pet={pet} />)
          : "No pets"}
      </div>
      <Pagination />
    </div>
  );
}
