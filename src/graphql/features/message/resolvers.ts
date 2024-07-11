import { IResolvers } from '@graphql-tools/utils';

export const messageResolvers: IResolvers = {
  Query: {
    message: () => ({}),
  },
  MessageQueries: {
    getMessage: async (_, { input }, { dataSources }) => {
      try {
        const message = await dataSources.messageAPI.getMessage(input.id);
        return {
          success: true,
          message: 'Message fetched successfully',
          messageData: message,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            messageData: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          messageData: null,
        };
      }
    },
    getAllMessages: async (_, { input }, { dataSources }) => {
      try {
        const messages = await dataSources.messageAPI.getAllMessages();
        return {
          success: true,
          message: 'Messages fetched successfully',
          messages,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            messages: [],
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          messages: [],
        };
      }
    },
  },
  Mutation: {
    message: () => ({}),
  },
  MessageMutations: {
    createMessage: async (_, { input }, { dataSources }) => {
      try {
        const message = await dataSources.messageAPI.createMessage(input.content);
        return {
          success: true,
          message: 'Message created successfully',
          messageData: message,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            messageData: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          messageData: null,
        };
      }
    },
    deleteMessage: async (_, { input }, { dataSources }) => {
      try {
        const success = await dataSources.messageAPI.deleteMessage(input.id);
        return {
          success,
          message: success ? 'Message deleted successfully' : 'Failed to delete message',
          messageData: null,
        };
      } catch (error) {
        if (error instanceof Error) {
          return {
            success: false,
            message: error.message,
            messageData: null,
          };
        }
        return {
          success: false,
          message: 'An unknown error occurred',
          messageData: null,
        };
      }
    },
  },
};
