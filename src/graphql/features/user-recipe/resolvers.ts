import { IResolvers } from "@graphql-tools/utils";

export const userRecipeResolvers: IResolvers = {
  Query: {
    userRecipe: () => ({}),
  },
  UserRecipeQueries: {
    getUserRecipe: async (_, { input }, { api }) => {
      try {
        const user = await api.userAPI.getUser(input.userId);
        const recipes = await api.recipeAPI.getAllRecipesByUserId(
          input.userId
        );
        return {
          success: true,
          message: "User and recipes fetched successfully",
          userRecipe: {
            user,
            recipes,
          },
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            userRecipe: null,
          };
        }
        return {
          success: false,
          message: "An unknown error occurred",
          userRecipe: null,
        };
      }
    },
  },
};
