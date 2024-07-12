import axios from 'axios';
import { Cart } from '../types';

class CartAPI {
  baseURL: string;

  constructor() {
    this.baseURL = 'https://dummyjson.com/';
  }

  async getCart(id: number): Promise<Cart> {
    const response = await axios.get(`${this.baseURL}carts/${id}`);
    return response.data;
  }

  async getAllCarts(): Promise<Cart[]> {
    const response = await axios.get(`${this.baseURL}carts`);
    return response.data.carts;
  }

  async createCart(userId: number, products: { id: number; quantity: number }[]): Promise<Cart> {
    const response = await axios.post(`${this.baseURL}carts/add`, { userId, products });
    return response.data;
  }

  async deleteCart(id: number): Promise<boolean> {
    const response = await axios.delete(`${this.baseURL}carts/${id}`);
    return response.status === 200;
  }
}

export default CartAPI;
