import axios from 'axios';
import { Message } from '../types';

class MessageAPI {
  baseURL: string;

  constructor() {
    this.baseURL = process.env.MESSAGE_API_BASE_URL || 'https://jsonplaceholder.typicode.com/';
  }

  async getMessage(id: number): Promise<Message> {
    try {
      const response = await axios.get(`${this.baseURL}posts/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to fetch message with id ${id}`);
    }
  }

  async getAllMessages(): Promise<Message[]> {
    try {
      const response = await axios.get(`${this.baseURL}posts`);
      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch messages');
    }
  }

  async createMessage(content: string): Promise<Message> {
    try {
      const response = await axios.post(`${this.baseURL}posts`, { content });
      return response.data;
    } catch (error) {
      throw new Error('Failed to create message');
    }
  }

  async deleteMessage(id: number): Promise<boolean> {
    try {
      const response = await axios.delete(`${this.baseURL}posts/${id}`);
      return response.status === 200;
    } catch (error) {
      throw new Error(`Failed to delete message with id ${id}`);
    }
  }
}

export default MessageAPI;
