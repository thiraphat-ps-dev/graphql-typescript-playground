import { IResolvers } from '@graphql-tools/utils';

export const userResolvers: IResolvers = {
  Query: {
    user: () => ({}),
  },
  UserQueries: {
    getUser: async (_, { input }, { api }) => {
      try {
        const user = await api.userAPI.getUser(input.id);
        return {
          success: true,
          message: 'User fetched successfully',
          user,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            user: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          user: null,
        };
      }
    },
    getAllUsers: async (_, { input }, { api }) => {
      try {
        const users = await api.userAPI.getAllUsers();
        return {
          success: true,
          message: 'Users fetched successfully',
          users,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            users: [],
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          users: [],
        };
      }
    },
  },
  Mutation: {
    user: () => ({}),
  },
  UserMutations: {
    createUser: async (_, { input }, { api }) => {
      try {
        const user = await api.userAPI.createUser(input.name);
        return {
          success: true,
          message: 'User created successfully',
          user,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            user: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          user: null,
        };
      }
    },
    deleteUser: async (_, { input }, { api }) => {
      try {
        const success = await api.userAPI.deleteUser(input.id);
        return {
          success,
          message: success ? 'User deleted successfully' : 'Failed to delete user',
          user: null,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            user: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          user: null,
        };
      }
    },
  },
};
