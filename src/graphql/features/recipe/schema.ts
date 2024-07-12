import { gql } from "apollo-server";

export const recipeTypeDefs = gql`
  type Recipe {
    id: ID!
    name: String!
    ingredients: [String]!
    instructions: [String]!
    prepTimeMinutes: Int!
    cookTimeMinutes: Int!
    servings: Int!
    difficulty: String!
    cuisine: String!
    caloriesPerServing: Int!
    tags: [String]!
    userId: ID!
    image: String!
    rating: Float!
    reviewCount: Int!
    mealType: [String]!
  }

  input GetRecipeInput {
    id: ID!
  }

  input GetAllRecipesInput {
    dummy: String
  }

  input SearchRecipesInput {
    query: String!
  }

  input CreateRecipeInput {
    name: String!
    ingredients: [String]!
    instructions: [String]!
    prepTimeMinutes: Int!
    cookTimeMinutes: Int!
    servings: Int!
    difficulty: String!
    cuisine: String!
    caloriesPerServing: Int!
    tags: [String]!
    userId: ID!
    image: String!
    rating: Float!
    reviewCount: Int!
    mealType: [String]!
  }

  input DeleteRecipeInput {
    id: ID!
  }

  type GetRecipeResponse {
    success: Boolean!
    message: String
    recipe: Recipe
  }

  type GetAllRecipesResponse {
    success: Boolean!
    message: String
    recipes: [Recipe]
    total: Int
    skip: Int
    limit: Int
  }

  type SearchRecipesResponse {
    success: Boolean!
    message: String
    recipes: [Recipe]
    total: Int
    skip: Int
    limit: Int
  }

  type CreateRecipeResponse {
    success: Boolean!
    message: String
    recipe: Recipe
  }

  type DeleteRecipeResponse {
    success: Boolean!
    message: String
    recipe: Recipe
  }

  type RecipeQueries {
    getRecipe(input: GetRecipeInput!): GetRecipeResponse
    getAllRecipes(input: GetAllRecipesInput!): GetAllRecipesResponse
    searchRecipes(input: SearchRecipesInput!): SearchRecipesResponse
  }

  type RecipeMutations {
    createRecipe(input: CreateRecipeInput!): CreateRecipeResponse
    deleteRecipe(input: DeleteRecipeInput!): DeleteRecipeResponse
  }

  extend type Query {
    recipe: RecipeQueries
  }

  extend type Mutation {
    recipe: RecipeMutations
  }
`;
