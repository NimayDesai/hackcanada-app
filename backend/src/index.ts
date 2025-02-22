import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import express from "express";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";

const main = async () => {
  const typeDefs = `#graphql
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => "Hello, world!",
    },
  };

  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(apolloServer, {
      context: async ({ req, res }: { req: any; res: any }) => ({
        req,
        res,
      }),
    }) as unknown as express.RequestHandler
  );

  app.listen(4000, () => {
    console.log("Server is running at http://localhost:4000/graphql");
  });
};

main();
