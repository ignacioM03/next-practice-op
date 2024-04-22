import { create } from "zustand";
import { Product } from "@/types/ProductType";

interface State {
  products: Product[];
  loading: boolean;
  error: string | null;
}

export const useProductStore = create<State>((set) => ({
  products: [],
  loading: false,
  error: null,
  setProducts: (products: Product[]) => set({ products }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
  addProduct: (product: Product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (id: number) =>
    set((state) => ({
      products: state.products.filter((product) => product.id !== id),
    })),
  updateProduct: (product: Product) =>
    set((state) => ({
      products: state.products.map((p) => (p.id === product.id ? product : p)),
    })),
  clearProducts: () => set({ products: [] }),
}));
