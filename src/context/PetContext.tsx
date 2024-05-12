"use client";
import {
  HandlePetActionType,
  HandlePetReducer,
} from "@/hooks/HandlePetReducer";
import { PetType } from "@/types/Pet";
import { createContext, useContext, useReducer } from "react";

type Props = {
  children: React.ReactNode;
};

interface PetState {
  pets: PetType[];
}
interface PetContextType {
  state: PetState;
  dispatch: (action: HandlePetActionType) => void;
}

const initialState: PetState = {
  pets: [],
};

const PetContext = createContext<PetContextType | undefined>(undefined);

export const usePetContext = () => {
  const context = useContext(PetContext);
  if (!context) {
    throw new Error("usePet must be used within a PetProvider");
  }
  return context;
  1;
};

export const PetProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(HandlePetReducer, initialState);
  const values = {
    state,
    dispatch,
  };
  return <PetContext.Provider value={values}>{children}</PetContext.Provider>;
};
