const products = async (parent, args, ctx) => await ctx.prisma.products();

const categories = async (parent, args, ctx) => await ctx.prisma.categories();

const userInfo = async (parent, args, ctx) => await ctx.prisma.user({ id: args.id });

module.exports = {
  products,
  categories,
  userInfo,
}