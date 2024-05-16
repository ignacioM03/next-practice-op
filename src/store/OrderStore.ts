import { OrderType } from "@/types/OrderType";
import { create } from "zustand";

interface State {
  orders: OrderType[];
  addOrder: (order: OrderType) => void;
  getOrder: (id: string) => OrderType | undefined;
  removeOrder: (id: string) => void;
  updateOrder: (order: OrderType) => void;
}

export const useOrderStore = create<State>((set) => ({
  orders: [],
  addOrder: (order: OrderType) =>
    set((state) => ({ orders: [...state.orders, order] })),
  getOrder: (id: string): OrderType | undefined => {
    return useOrderStore
      .getState()
      .orders.find((order: OrderType) => order.id === id);
  },
  removeOrder: (id: string) => set((state) => ({ orders: state.orders })),
  updateOrder: (order: OrderType) => set((state) => ({ orders: state.orders })),
}));
