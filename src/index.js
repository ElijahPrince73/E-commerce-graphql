import { GraphQLServer } from 'graphql-yoga'
import { prisma } from './generated/prisma-client'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutations'
import User from './resolvers/User'
import Cart from './resolvers/Cart'
import Category from './resolvers/Category';
import Product from './resolvers/Product'

const resolvers = {
  Query,
  Mutation,
  User,
  Cart,
  Category,
  Product
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma
  }
});

server.start({ port: 4001 }, () => {
  console.log("Server is running on http://localhost:4001");
});
