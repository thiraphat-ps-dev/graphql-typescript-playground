import { IResolvers } from '@graphql-tools/utils';

export const recipeResolvers: IResolvers = {
  Query: {
    recipe: () => ({}),
  },
  RecipeQueries: {
    getRecipe: async (_, { input }, { api }) => {
      try {
        const recipe = await api.recipeAPI.getRecipe(input.id);
        return {
          success: true,
          message: 'Recipe fetched successfully',
          recipe,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            recipe: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          recipe: null,
        };
      }
    },
    getAllRecipes: async (_, { input }, { api }) => {
      try {
        const recipes = await api.recipeAPI.getAllRecipes();
        return {
          success: true,
          message: 'Recipes fetched successfully',
          recipes,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            recipes: [],
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          recipes: [],
        };
      }
    },
    searchRecipes: async (_, { input }, { api }) => {
      try {
        const recipes = await api.recipeAPI.searchRecipes(input.query);
        return {
          success: true,
          message: 'Recipes found successfully',
          recipes,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            recipes: [],
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          recipes: [],
        };
      }
    },
  },
  Mutation: {
    recipe: () => ({}),
  },
  RecipeMutations: {
    createRecipe: async (_, { input }, { api }) => {
      try {
        const recipe = await api.recipeAPI.createRecipe(input);
        return {
          success: true,
          message: 'Recipe created successfully',
          recipe,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            recipe: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          recipe: null,
        };
      }
    },
    deleteRecipe: async (_, { input }, { api }) => {
      try {
        const success = await api.recipeAPI.deleteRecipe(input.id);
        return {
          success,
          message: success ? 'Recipe deleted successfully' : 'Failed to delete recipe',
          recipe: null,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            recipe: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          recipe: null,
        };
      }
    },
  },
};
