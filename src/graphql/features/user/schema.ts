import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  type User {
    id: ID!
    name: String!
  }

  input GetUserInput {
    id: ID!
  }

  input GetAllUsersInput {
    dummy: String
  }

  input CreateUserInput {
    name: String!
  }

  input DeleteUserInput {
    id: ID!
  }

  type GetUserResponse {
    success: Boolean!
    message: String
    user: User
  }

  type GetAllUsersResponse {
    success: Boolean!
    message: String
    users: [User]
  }

  type CreateUserResponse {
    success: Boolean!
    message: String
    user: User
  }

  type DeleteUserResponse {
    success: Boolean!
    message: String
    user: User
  }

  type UserQueries {
    getUser(input: GetUserInput!): GetUserResponse
    getAllUsers(input: GetAllUsersInput!): GetAllUsersResponse
  }

  type UserMutations {
    createUser(input: CreateUserInput!): CreateUserResponse
    deleteUser(input: DeleteUserInput!): DeleteUserResponse
  }

  extend type Query {
    user: UserQueries
  }

  extend type Mutation {
    user: UserMutations
  }
`;
