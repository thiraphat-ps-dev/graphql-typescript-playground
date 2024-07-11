import { ApolloServer, gql } from "apollo-server";
import * as dotenv from "dotenv";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import MessageAPI from "./graphql/datasources/messageAPI";
import UserAPI from "./graphql/datasources/userAPI";
import ProductAPI from "./graphql/datasources/productAPI";

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
    dataSources: {
      messageAPI: new MessageAPI(),
      userAPI: new UserAPI(),
      productAPI: new ProductAPI(),
    },
  }),
});

// Start the server
server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
