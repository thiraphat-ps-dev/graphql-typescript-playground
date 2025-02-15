import { mergeResolvers } from "@graphql-tools/merge";
import { messageResolvers } from "./features/message/resolvers";
import { userResolvers } from "./features/user/resolvers";
import { productResolvers } from "./features/product/resolvers";
import { cartResolvers } from "./features/cart/resolvers";
import { recipeResolvers } from "./features/recipe/resolvers";
import { userRecipeResolvers } from "./features/user-recipe/resolvers";

export const resolvers = mergeResolvers([
  messageResolvers,
  userResolvers,
  productResolvers,
  cartResolvers,
  recipeResolvers,
  userRecipeResolvers
]);
