export interface Message {
  id: number;
  content: string;
}

export interface User {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
}

export interface Cart {
  id: number;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

export interface UserCart {
  user: User;
  cart: Cart;
}
