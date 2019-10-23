const items = async (parent, args, ctx) => {
  const items = await ctx.prisma.cart({ id: parent.id }).items()
  console.log(items);
  return items
};

module.exports = {
  items
}