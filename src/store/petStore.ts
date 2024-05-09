import { PetType } from "@/types/Pet";
import { create } from "zustand";

interface PetState {
  pets: PetType[];
  addPet: (pet: PetType) => void;
  removePet: (id: string) => void;
  updatePet: (pet: PetType) => void;
  clearPets: () => void;
  setPets: (pets: PetType[]) => void;
  getPets: () => void;
  getPet: (id: string) => PetType | undefined;
}
export const usePetStore = create<PetState>((set, get) => ({
  pets: [],
  addPet: (pet: PetType) =>
    set((state: any) => ({ pets: [...state.pets, pet] })),
  removePet: (id: string) =>
    set((state: any) => ({
      pets: state.pets.filter((pet: PetType) => pet.id !== id),
    })),
  updatePet: (updatedPet) =>
    set((state) => ({
      pets: state.pets.map((pet) =>
        // pet.id === updatedPet.id ? pet : updatedPet
        pet.id === updatedPet.id ? updatedPet : pet
      ),
    })),
  clearPets: () => set({ pets: [] }),
  setPets: (pets: PetType[]) => set({ pets: pets }),
  getPets: () => set((state: any) => ({ pets: state.pets })),
  getPet: (id: string) => get().pets.find((pet: PetType) => pet.id === id),
}));
