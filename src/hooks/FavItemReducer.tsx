import { Product } from "@/types/ProductType";

export enum HandleFavItemAction {
  ADD_FAV_ITEM = "ADD_FAV_ITEM",
  REMOVE_FAV_ITEM = "REMOVE_FAV_ITEM",
}

interface FavoriteState {
  items: Product[];
}

export type HandleFavItemActionType =
  | { type: HandleFavItemAction.ADD_FAV_ITEM; payload: Product }
  | { type: HandleFavItemAction.REMOVE_FAV_ITEM; payload: string };

export const HandleFavoriteItemReducer = (
  state: FavoriteState,
  action: HandleFavItemActionType
) => {
  switch (action.type) {
    case HandleFavItemAction.ADD_FAV_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case HandleFavItemAction.REMOVE_FAV_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
