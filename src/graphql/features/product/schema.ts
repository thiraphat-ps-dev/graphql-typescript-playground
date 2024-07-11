import { gql } from 'apollo-server';

export const productTypeDefs = gql`
  type Product {
    id: ID!
    title: String!
    price: Float!
  }

  input GetProductInput {
    id: ID!
  }

  input GetAllProductsInput {
    dummy: String
  }

  input CreateProductInput {
    title: String!
    price: Float!
  }

  input DeleteProductInput {
    id: ID!
  }

  type GetProductResponse {
    success: Boolean!
    message: String
    product: Product
  }

  type GetAllProductsResponse {
    success: Boolean!
    message: String
    products: [Product]
  }

  type CreateProductResponse {
    success: Boolean!
    message: String
    product: Product
  }

  type DeleteProductResponse {
    success: Boolean!
    message: String
    product: Product
  }

  type ProductQueries {
    getProduct(input: GetProductInput!): GetProductResponse
    getAllProducts(input: GetAllProductsInput!): GetAllProductsResponse
  }

  type ProductMutations {
    createProduct(input: CreateProductInput!): CreateProductResponse
    deleteProduct(input: DeleteProductInput!): DeleteProductResponse
  }

  extend type Query {
    product: ProductQueries
  }

  extend type Mutation {
    product: ProductMutations
  }
`;
