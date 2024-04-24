export interface UserType {
  id: string;
  name?: string;
  username?: string;
  email?: string;
  password?: string;
  createdAt?: Date;
  updatedAt?: Date;
  role?: "admin" | "user";
  profilePicture: string;
}
