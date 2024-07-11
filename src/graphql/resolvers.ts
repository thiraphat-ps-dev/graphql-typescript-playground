import { mergeResolvers } from '@graphql-tools/merge';
import { messageResolvers } from './features/message/resolvers';
import { userResolvers } from './features/user/resolvers';
import { productResolvers } from './features/product/resolvers';

export const resolvers = mergeResolvers([messageResolvers, userResolvers, productResolvers]);
