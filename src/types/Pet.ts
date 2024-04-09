export type PetType = {
  id?: number;
  name: string;
  age: number;
  breed: string;
  status: "available" | "pending" | "sold";
  description: string;
  picture: string;
};
