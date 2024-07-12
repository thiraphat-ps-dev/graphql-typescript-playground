import { IResolvers } from '@graphql-tools/utils';

export const cartResolvers: IResolvers = {
  Query: {
    cart: () => ({}),
  },
  CartQueries: {
    getCart: async (_, { input }, { api }) => {
      try {
        const cart = await api.cartAPI.getCart(input.id);
        return {
          success: true,
          message: 'Cart fetched successfully',
          cart,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            cart: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          cart: null,
        };
      }
    },
    getAllCarts: async (_, { input }, { api }) => {
      try {
        const carts = await api.cartAPI.getAllCarts();
        return {
          success: true,
          message: 'Carts fetched successfully',
          carts,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            carts: [],
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          carts: [],
        };
      }
    },
    getUserCart: async (_, { userId }, { api }) => {
      try {
        const user = await api.userAPI.getUser(userId);
        const cart = await api.cartAPI.getCart(userId);
        return {
          success: true,
          message: 'User and cart fetched successfully',
          userCart: {
            user,
            cart,
          },
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            userCart: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          userCart: null,
        };
      }
    },
  },
  Mutation: {
    cart: () => ({}),
  },
  CartMutations: {
    createCart: async (_, { input }, { api }) => {
      try {
        const cart = await api.cartAPI.createCart(input.userId, input.products);
        return {
          success: true,
          message: 'Cart created successfully',
          cart,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            cart: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          cart: null,
        };
      }
    },
    deleteCart: async (_, { input }, { api }) => {
      try {
        const success = await api.cartAPI.deleteCart(input.id);
        return {
          success,
          message: success ? 'Cart deleted successfully' : 'Failed to delete cart',
          cart: null,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            cart: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          cart: null,
        };
      }
    },
  },
};
