import { gql } from "apollo-server";

export const userRecipeTypeDefs = gql`
  type UserRecipe {
    user: User!
    recipes: [Recipe]!
  }

  input GetUserRecipeInput {
    userId: ID!
  }

  type GetUserRecipeResponse {
    success: Boolean!
    message: String
    userRecipe: UserRecipe
  }

  type UserRecipeQueries {
    getUserRecipe(input: GetUserRecipeInput!): GetUserRecipeResponse
  }

  extend type Query {
    userRecipe: UserRecipeQueries
  }
`;
