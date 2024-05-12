export type NavBarItem = {
  key: string;
  name: string;
  path: string;
  icon: JSX.Element;
  children?: NavBarItemChildren[];
};

export type NavBarItemChildren = {
  key: string;
  path: string;
  icon?: JSX.Element;
};

export type Pet = {
  id: string;
  name: string;
  surname: string;
  isWalking: boolean;
};

export type updatePet = {
  id: string;
  petUpdated: Pet;
};
