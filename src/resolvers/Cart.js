const items = async (parent, args, ctx) =>
  await ctx.prisma.cart({ id: parent.id }).items();

module.exports = {
  items
}