import { products as initialProducts } from "../mocks/products.json";
import { create } from "zustand";
import { Product } from "@/types/ProductType";
import { devtools } from "zustand/middleware";

interface State {
  products: Product[];
  addProduct: (product: Product) => void;
  loading: boolean;
  error: string | null;
  getProduct: (id: string) => Product | undefined;
  removeProduct: (id: string) => void;
  updateProduct: (product: Product) => void;
}

export const useProductStore = create<State>()(
  devtools((set) => ({
    products: initialProducts,
    loading: false,
    error: null,
    setProducts: (products: Product[]) => set({ products }),
    setLoading: (loading: boolean) => set({ loading }),
    setError: (error: string | null) => set({ error }),
    addProduct: (product: Product) =>
      set((state) => ({ products: [...state.products, product] })),
    removeProduct: (id: string) =>
      set((state) => ({
        products: state.products.filter(
          (product: Product) => product.id !== id
        ),
      })),
    updateProduct: (product: Product) =>
      set((state) => ({
        products: state.products.map((p: Product) =>
          p.id === product.id ? product : p
        ),
      })),
    clearProducts: () => set({ products: [] }),
    getProduct: (id: string): Product | undefined => {
      return useProductStore
        .getState()
        .products.find((product: Product) => product.id === id);
    },
  }))
);
