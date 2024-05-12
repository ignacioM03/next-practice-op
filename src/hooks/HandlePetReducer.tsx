import { PetType } from "../types/Pet";
export enum HandlePetActions {
  UPDATE_PET = "UPDATE_PET",
  ADD_PET = "ADD_PET",
  REMOVE_PET = "REMOVE_PET",
  CLEAR_PETS = "CLEAR_PETS",
  SET_PETS = "SET_PETS",
  GET_PETS = "GET_PETS",
  GET_PET = "GET_PET",
}

interface PetState {
  pets: PetType[];
}

export type HandlePetActionType =
  | { type: HandlePetActions.ADD_PET; payload: PetType }
  | { type: HandlePetActions.UPDATE_PET; payload: PetType }
  | { type: HandlePetActions.REMOVE_PET; payload: string }
  | { type: HandlePetActions.CLEAR_PETS }
  | { type: HandlePetActions.SET_PETS; payload: PetType[] }
  | { type: HandlePetActions.GET_PETS }
  | { type: HandlePetActions.GET_PET; payload: string };

export const HandlePetReducer = (
  state: PetState,
  action: HandlePetActionType
) => {
  switch (action.type) {
    case HandlePetActions.ADD_PET:
      return { ...state, pets: [...state.pets, action.payload] };
    case HandlePetActions.UPDATE_PET:
      return {
        ...state,
        pets: state.pets.map((pet) =>
          pet.id === action.payload.id ? action.payload : pet
        ),
      };
    case HandlePetActions.REMOVE_PET:
      return {
        ...state,
        pets: state.pets.filter((pet) => pet.id !== action.payload),
      };
    case HandlePetActions.CLEAR_PETS:
      return { ...state, pets: [] };
    case HandlePetActions.SET_PETS:
      return { ...state, pets: action.payload };
    case HandlePetActions.GET_PETS:
      return state;
    case HandlePetActions.GET_PET:
      return {
        ...state,
        pets: state.pets.filter((pet) => pet.id === action.payload),
      };
    default:
      return state;
  }
};
