const products = async (parent, args, ctx) => {
  return ctx.prisma.products()
}

const categories = async (parent, args, ctx) => {
  return ctx.prisma.categories();
}

const userInfo = async (parent, args, ctx) => {
  return ctx.prisma.user({ id: args.id })
}

const productsOfCategory = async (parent, args, ctx) => {
  return ctx.prisma
    .categories({ categoryName: args.categoryName })
    .products();
}

module.exports = {
  products,
  categories,
  userInfo,
  productsOfCategory
}