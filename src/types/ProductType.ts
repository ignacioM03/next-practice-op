export interface Product {
  id?: string;
  title: string;
  price: number;
  description: string;
  category?: string;
  discountPercentage?: number;
  rating?: number;
  image: string;
  quantity?: number;
  stock?: number;
  brand?: string;
  userId?: string;
  availability?: boolean;
  thumbnail?: string;
  isOffer?: boolean;
  sales?: number;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
  updatedBy?: string;
  shipping?: Shipping;
  dispatched?: boolean;
  outlet?: boolean;
}

enum ProductCategory {
  Electronics = "Electronics",
  Clothing = "Clothing",
  Books = "Books",
  HomeDecor = "Home Decor",
  Sports = "Sports",
  Health = "Health",
  Toiletries = "Toiletries",
  Pets = "Pets",
  Beauty = "Beauty",
  Fashion = "Fashion",
  Games = "Games",
  BooksAndMovies = "Books and Movies",
  SportsAndFitness = "Sports and Fitness",
}

enum Shipping {
  Express = "Express",
  Regular = "Regular",
}
