import { IResolvers } from '@graphql-tools/utils';

export const productResolvers: IResolvers = {
  Query: {
    product: () => ({}),
  },
  ProductQueries: {
    getProduct: async (_, { input }, { api }) => {
      try {
        const product = await api.productAPI.getProduct(input.id);
        return {
          success: true,
          message: 'Product fetched successfully',
          product,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            product: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          product: null,
        };
      }
    },
    getAllProducts: async (_, { input }, { api }) => {
      try {
        const products = await api.productAPI.getAllProducts();
        return {
          success: true,
          message: 'Products fetched successfully',
          products,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            products: [],
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          products: [],
        };
      }
    },
  },
  Mutation: {
    product: () => ({}),
  },
  ProductMutations: {
    createProduct: async (_, { input }, { api }) => {
      try {
        const product = await api.productAPI.createProduct(input.title, input.price);
        return {
          success: true,
          message: 'Product created successfully',
          product,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            product: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          product: null,
        };
      }
    },
    deleteProduct: async (_, { input }, { api }) => {
      try {
        const success = await api.productAPI.deleteProduct(input.id);
        return {
          success,
          message: success ? 'Product deleted successfully' : 'Failed to delete product',
          product: null,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            product: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          product: null,
        };
      }
    },
  },
};
