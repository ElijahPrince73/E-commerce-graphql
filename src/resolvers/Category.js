const productList = async ({ id }, args, ctx) =>
  await ctx.prisma.category({ id }).productList();

module.exports = {
  productList
};