import { Product } from "./ProductType";
import { UserType } from "./UserType";
export interface OrderType {
  id: string;
  name?: string;
  price?: number;
  quantity?: number;
  total?: number;
  image?: string;
  items: Product[];
  status?: string;
  date?: Date;
  user: UserType;
  shippingId?: string;
  shippingCompany?: string;
  dispatchId?: string;
}
