import axios from "axios";
import { Recipe } from "../types";

class RecipeAPI {
  baseURL: string;

  constructor() {
    this.baseURL = "https://dummyjson.com/";
  }

  async getRecipe(id: number): Promise<Recipe> {
    const response = await axios.get(`${this.baseURL}recipes/${id}`);
    return response.data;
  }

  async getAllRecipes(): Promise<{
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
  }> {
    const response = await axios.get(`${this.baseURL}recipes`);
    return {
      recipes: response.data.recipes,
      total: response.data.total,
      skip: response.data.skip,
      limit: response.data.limit,
    };
  }

  async searchRecipes(query: string): Promise<{
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
  }> {
    const response = await axios.get(
      `${this.baseURL}recipes/search?q=${query}`
    );
    return {
      recipes: response.data.recipes,
      total: response.data.total,
      skip: response.data.skip,
      limit: response.data.limit,
    };
  }

  async createRecipe(input: Recipe): Promise<Recipe> {
    const response = await axios.post(`${this.baseURL}recipes/add`, input);
    return response.data;
  }

  async deleteRecipe(id: number): Promise<boolean> {
    const response = await axios.delete(`${this.baseURL}recipes/${id}`);
    return response.status === 200;
  }
}

export default RecipeAPI;
