"use client";
import {
  HandleFavItemActionType,
  HandleFavoriteItemReducer,
} from "../hooks/FavItemReducer";
import { createContext, useContext, useReducer } from "react";
import { Product } from "@/types/ProductType";

type Props = {
  children: React.ReactNode;
};

interface FavState {
  items: Product[];
}
interface FavActionContext {
  state: FavState;
  dispatch: (action: HandleFavItemActionType) => void;
}

const initialState: FavState = {
  items: [],
};

const FavContext = createContext<FavActionContext | null>(null);

export const useFavItems = () => {
  const context = useContext(FavContext);
  if (!context) {
    throw new Error("useFavItems must be used within a FavContextProvider");
  }
  return context;
};

export const FavContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(HandleFavoriteItemReducer, initialState);
  const values = {
    state,
    dispatch,
  };
  return <FavContext.Provider value={values}>{children}</FavContext.Provider>;
};
