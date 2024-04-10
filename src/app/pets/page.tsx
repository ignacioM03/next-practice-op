"use client";
import { Pagination } from "@/components/Pagination/Pagination";
import { PetCard } from "@/components/PetCart/PetCard";
import { usePetStore } from "@/store/petStore";
import Link from "next/link";
import { useEffect } from "react";

export default function PetsPage() {
  const { pets } = usePetStore();
  const { getPets } = usePetStore();

  useEffect(() => {
    getPets();
  }, []);

  return (
    <div className="container">
      <h1 className="text-3xl text-center mb-6">Mascotas</h1>
      <Link
        href="/pets/new"
        className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow mb-5"
      >
        Agregar Mascota
      </Link>
      <div className="grid gap-4 grid-cols-3 grid-rows-3 mt-6  justify-center">
        {pets.length > 0 ? (
          pets.map((pet: any) => <PetCard key={pet.id} pet={pet} />)
        ) : (
          <div className="flex ">
            <p className="text-center">No pets</p>
          </div>
        )}
      </div>
      <Pagination />
    </div>
  );
}
