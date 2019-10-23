const cart = async (parent, args, ctx) => {
  return await ctx.prisma.user({ id: parent.id }).cart()
};

module.exports = {
  cart,
};