import { ApolloServer, gql } from "apollo-server";
import * as dotenv from "dotenv";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import MessageAPI from "./graphql/api/message";
import UserAPI from "./graphql/api/user";
import ProductAPI from "./graphql/api/product";
import CartAPI from "./graphql/api/cart";

dotenv.config();

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true, // enable introspection
  plugins: [
    ApolloServerPluginLandingPageGraphQLPlayground(), // enable playground
  ],
  context: () => ({
    api: {
      messageAPI: new MessageAPI(),
      userAPI: new UserAPI(),
      productAPI: new ProductAPI(),
      cartAPI: new CartAPI(),
    },
  }),
});

// Start the server
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
