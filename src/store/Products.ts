import { create } from "zustand";
import { Product } from "@/types/ProductType";

interface State {
  products: Product[];
  addProduct: (product: Product) => void;
  loading: boolean;
  error: string | null;
  getProduct: (id: string) => Product | undefined;
  removeProduct: (id: string) => void;
}

export const useProductStore = create<State>((set) => ({
  products: [
    {
      id: "2",
      title: "product 2",
      price: 24,
      description: "description",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      quantity: 1,
    },
    {
      id: "3",
      title: "product 3",
      price: 28,
      description: "description",
      category: "Electronics",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      quantity: 1,
    },
    {
      id: "1",
      title: "product 1",
      price: 2,
      description: "description",
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      quantity: 1,
    },
    {
      id: "4",
      title: "product 4",
      price: 15,
      description: "description",
      category: "Clothing",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
      quantity: 1,
    },
  ],
  loading: false,
  error: null,
  setProducts: (products: Product[]) => set({ products }),
  setLoading: (loading: boolean) => set({ loading }),
  setError: (error: string | null) => set({ error }),
  addProduct: (product: Product) =>
    set((state) => ({ products: [...state.products, product] })),
  removeProduct: (id: string) =>
    set((state) => ({
      products: state.products.filter((product: Product) => product.id !== id),
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
}));
