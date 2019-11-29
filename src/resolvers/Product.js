const images = async ({ id }, args, ctx) =>
  await ctx.prisma.product({ id }).images()

module.exports = {
  images
};