const products = async (root, args, ctx) => {
  return ctx.prisma.products()
}

const categories = async (root, args, ctx) => {
  return ctx.prisma.categories();
}

const userInfo = async (root, args, ctx) => {
  return ctx.prisma.user({ id: args.id });
}


const productsOfCategory = async (root, args, ctx) => {
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