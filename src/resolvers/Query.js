const products = async (parent, args, ctx) => {
  const where = args.search
    ? {
        productName_contains: args.search,
      }
    : {};

  return await ctx.prisma.products({ where });
}

const categories = async (parent, args, ctx) => await ctx.prisma.categories();

const userInfo = async (parent, args, ctx) => await ctx.prisma.user({ id: args.id });

module.exports = {
  products,
  categories,
  userInfo,
};