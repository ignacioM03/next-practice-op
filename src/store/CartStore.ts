import { Product } from "@/types/ProductType";
import { create } from "zustand";

interface State {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: number) => void;
  loading: boolean;
  error: string | null;
}

export const useCartStore = create<State>((set) => ({
  items: [],
  loading: false,
  error: null,
  addItem: (item: Product) =>
    set((state) => ({ items: [...state.items, item] })),
  removeItem: (id: number) =>
    set((state) => ({
      items: state.items.filter((item: Product) => item.id !== id),
    })),
}));
