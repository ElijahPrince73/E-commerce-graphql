const { prisma } = require('../prisma/generated/prisma-client')
const { GraphQLServer } = require("graphql-yoga");

const resolvers = {
  Query: {
    products(root, args, ctx) {
      return ctx.prisma.products()
    },
    categories(root, args, ctx) {
      return ctx.prisma.categories();
    },
    userInfo(root, args, ctx) {
      return ctx.prisma.user({ id: args.id });
    },
    productsOfCategory(root, args, ctx) {
      return ctx.prisma
        .categories({ categoryName: args.categoryName })
        .products();
    }
  }
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
