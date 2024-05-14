export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: ProductCategory;
  image: string;
  quantity: number;
  userId?: string;
  availability?: boolean;
  isOffer?: boolean;
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
