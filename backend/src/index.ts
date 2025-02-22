import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'
import { ApolloServer } from '@apollo/server';
import express from 'express';
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';

import { PrismaClient } from '@prisma/client'


const main = async () => {
  const prisma = new PrismaClient();
  const allUsers = await prisma.user.findMany()
  // console.log(process.env.GEMINI_API)
  // const genAI = new GoogleGenerativeAI(process.env.GEMINI_API ?? '');
  const typeDefs = `#graphql
    type Query {
      hello: String
    }
  `;

  const resolvers = {
    Query: {
      hello: () => 'Hello, world!',
    },
  };

  const app = express();
  const apServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: ({ req, res }) => ({ req, res }),
    }),
  );
  app.listen(4000, () => {
    console.log('Server is running at http://localhost:4000/graphql');
  });
  // const prompt = "Explain how AI works";

  // const result = await model.generateContent(prompt);
  // console.log("Result: ", result.response.text());
  const server = new ApolloServer({});
}

main();