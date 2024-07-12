import { gql } from "apollo-server";

export const cartTypeDefs = gql`
  type Cart {
    id: ID!
    products: [Product]!
    total: Float!
    discountedTotal: Float!
    userId: ID!
    totalProducts: Int!
    totalQuantity: Int!
  }

  input GetCartInput {
    id: ID!
  }

  input ProductInput {
    id: ID!
    quantity: Int!
  }

  input GetAllCartsInput {
    dummy: String
  }

  input CreateCartInput {
    userId: ID!
    products: [ProductInput!]!
  }

  input DeleteCartInput {
    id: ID!
  }

  type GetCartResponse {
    success: Boolean!
    message: String
    cart: Cart
  }

  type GetAllCartsResponse {
    success: Boolean!
    message: String
    carts: [Cart]
  }

  type CreateCartResponse {
    success: Boolean!
    message: String
    cart: Cart
  }

  type DeleteCartResponse {
    success: Boolean!
    message: String
    cart: Cart
  }

  type UserCart {
    user: User
    cart: Cart
  }

  type GetUserCartResponse {
    success: Boolean!
    message: String
    userCart: UserCart
  }

  type CartQueries {
    getCart(input: GetCartInput!): GetCartResponse
    getAllCarts(input: GetAllCartsInput!): GetAllCartsResponse
    getUserCart(userId: ID!): GetUserCartResponse
  }

  type CartMutations {
    createCart(input: CreateCartInput!): CreateCartResponse
    deleteCart(input: DeleteCartInput!): DeleteCartResponse
  }

  extend type Query {
    cart: CartQueries
  }

  extend type Mutation {
    cart: CartMutations
  }
`;
