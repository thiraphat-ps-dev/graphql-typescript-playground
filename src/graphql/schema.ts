import { gql } from "apollo-server";
import { messageTypeDefs } from "./features/message/schema";
import { userTypeDefs } from "./features/user/schema";
import { productTypeDefs } from "./features/product/schema";
import { cartTypeDefs } from "./features/cart/schema";
import { recipeTypeDefs } from "./features/recipe/schema";
import { userRecipeTypeDefs } from "./features/user-recipe/schema";

const baseTypeDefs = gql`
  type Query
  type Mutation
`;

export const typeDefs = [
  baseTypeDefs,
  messageTypeDefs,
  userTypeDefs,
  productTypeDefs,
  cartTypeDefs,
  recipeTypeDefs,
  userRecipeTypeDefs,
];
