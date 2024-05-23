import { Product } from "@/types/ProductType";
import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface State {
  items: Product[];
  addItem: (item: Product) => void;
  removeItem: (id: string) => void;
  loading: boolean;
  error: string | null;
  clearCart: () => void;
}

export const useCartStore = create<State>()(
  devtools((set) => ({
    items: [],
    loading: false,
    error: null,
    addItem: (item: Product) =>
      set((state) => ({ items: [...state.items, item] })),
    removeItem: (id: string) =>
      set((state) => ({
        items: state.items.filter((item: Product) => item.id !== id),
      })),
    clearCart: () => set({ items: [] }),
  }))
);
