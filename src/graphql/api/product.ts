import axios from 'axios';
import { Product } from '../types';
import { NotFoundError, BadRequestError } from '../../errors/CustomError';

class ProductAPI {
  baseURL: string;

  constructor() {
    this.baseURL = 'https://dummyjson.com/';
  }

  async getProduct(id: number): Promise<Product> {
    try {
      const response = await axios.get(`${this.baseURL}products/${id}`);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new NotFoundError(`Product with id ${id} not found`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await axios.get(`${this.baseURL}products`);
      return response.data.products;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new Error('Failed to fetch products');
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async createProduct(title: string, price: number): Promise<Product> {
    try {
      const response = await axios.post(`${this.baseURL}products/add`, { title, price });
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new BadRequestError('Failed to create product');
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }

  async deleteProduct(id: number): Promise<boolean> {
    try {
      const response = await axios.delete(`${this.baseURL}products/${id}`);
      return response.status === 200;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw new NotFoundError(`Failed to delete product with id ${id}`);
      } else {
        throw new Error('An unknown error occurred');
      }
    }
  }
}

export default ProductAPI;
