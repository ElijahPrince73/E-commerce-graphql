const cart = async (parent, args, ctx) =>
  await ctx.prisma.user({ id: parent.id }).cart();

const orders = async (parent, args, ctx) => 
  await ctx.prisma.user({ id: parent.id }).orders()

module.exports = {
  cart,
  orders
};