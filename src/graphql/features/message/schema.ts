import { gql } from 'apollo-server';

export const messageTypeDefs = gql`
  type Message {
    id: ID!
    content: String!
  }

  input GetMessageInput {
    id: ID!
  }

  input GetAllMessagesInput {
    dummy: String
  }

  input CreateMessageInput {
    content: String!
  }

  input DeleteMessageInput {
    id: ID!
  }

  type GetMessageResponse {
    success: Boolean!
    message: String
    messageData: Message
  }

  type GetAllMessagesResponse {
    success: Boolean!
    message: String
    messages: [Message]
  }

  type CreateMessageResponse {
    success: Boolean!
    message: String
    messageData: Message
  }

  type DeleteMessageResponse {
    success: Boolean!
    message: String
    messageData: Message
  }

  type MessageQueries {
    getMessage(input: GetMessageInput!): GetMessageResponse
    getAllMessages(input: GetAllMessagesInput!): GetAllMessagesResponse
  }

  type MessageMutations {
    createMessage(input: CreateMessageInput!): CreateMessageResponse
    deleteMessage(input: DeleteMessageInput!): DeleteMessageResponse
  }

  extend type Query {
    message: MessageQueries
  }

  extend type Mutation {
    message: MessageMutations
  }
`;
