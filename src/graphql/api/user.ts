import axios from 'axios';
import { User } from '../types';

class UserAPI {
  baseURL: string;

  constructor() {
    this.baseURL = process.env.USER_API_BASE_URL || 'https://jsonplaceholder.typicode.com/';
  }

  async getUser(id: number): Promise<User> {
    try {
      const response = await axios.get(`${this.baseURL}users/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch user with id ${id}`);
    }
  }

  async getAllUsers(): Promise<User[]> {
    try {
      const response = await axios.get(`${this.baseURL}users`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch users');
    }
  }

  async createUser(name: string): Promise<User> {
    try {
      const response = await axios.post(`${this.baseURL}users`, { name });
      return response.data;
    } catch (error) {
      throw new Error('Failed to create user');
    }
  }

  async deleteUser(id: number): Promise<boolean> {
    try {
      const response = await axios.delete(`${this.baseURL}users/${id}`);
      return response.status === 200;
    } catch (error) {
      throw new Error(`Failed to delete user with id ${id}`);
    }
  }
}

export default UserAPI;
