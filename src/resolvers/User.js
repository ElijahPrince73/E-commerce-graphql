const cart = async (parent, args, ctx) =>
  await ctx.prisma.user({ id: parent.id }).cart();

module.exports = {
  cart
};