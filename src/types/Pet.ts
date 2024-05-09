export type PetType = {
  id?: string;
  name: string;
  age?: number;
  breed?: string;
  status: "available" | "pending" | "sold";
  description?: string;
  picture?: string;
};
