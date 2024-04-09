import { PetType } from "@/types/Pet";
import { create } from "zustand";

interface PetState {
  pets: PetType[];
  addPet: (pet: PetType) => void;
  removePet: (id: number) => void;
  updatePet: (pet: PetType) => void;
  clearPets: () => void;
  setPets: (pets: PetType[]) => void;
  getPets: () => void;
  getPet: (id: number) => void;
}
export const usePetStore = create<PetState>((set, get) => ({
  pets: [],
  addPet: (pet: PetType) =>
    set((state: any) => ({ pets: [...state.pets, pet] })),
  removePet: (id: number) =>
    set((state: any) => ({
      pets: state.pets.filter((pet: PetType) => pet.id !== id),
    })),
  updatePet: (pet: PetType) =>
    set((state: any) => ({
      pets: state.pets.map((p: PetType) => (p.id === pet.id ? pet : p)),
    })),
  clearPets: () => set({ pets: [] }),
  setPets: (pets: PetType[]) => set({ pets: pets }),
  getPets: () => set((state: any) => ({ pets: state.pets })),
  getPet: (id: number) => set((state: any) => ({ pets: state.pets[id] })),
}));
