import dotenv from 'dotenv';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

dotenv.config()

const signup = async (parent, { email, password }, ctx, info) => {
  const hashPassword = await bcrypt.hash(password, 10);

  const user = await ctx.prisma.createUser({ email, password: hashPassword });

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

  return {
    token,
    user
  };
};

const login = async (parent, args, ctx, info) => {
  const user = await ctx.prisma.user({ email: args.email });

  if (!user) {
    throw new Error("No such user found");
  }

  const valid = await bcrypt.compare(args.password, user.password);

  if (!valid) {
    throw new Error("Invalid password");
  }

  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);

  return {
    token,
    user
  };
};

const addToCart = async (parent, { userId, productId }, ctx, info) => {
  const { id } = await ctx.prisma.user({ id: userId }).cart();
  
  if (id === null) {
    return await ctx.prisma.createCart({
      user: {
        connect: {
          id: userId
        }
      },
      items: {
        connect: {
          id: productId
        }
      }
    });
  } 

  return await ctx.prisma.updateCart({
    data: {
      items: {
        connect: {
          id: productId
        }
      },
    },
    where: { id }
  });
}

const deleteItemFromCart = async (parent, { userId, productId }, ctx) => {
  const { id } = await ctx.prisma.user({ id: userId }).cart();

  return await ctx.prisma.updateCart({
    data: { 
      items: {
        disconnect: {
          id: productId
        }
      }
    },
    where: { id },
  })
}

const checkout = async (parent, { userId }, ctx) => {
  const { id } = await ctx.prisma.user({ id: userId }).cart();

  return await ctx.prisma.deleteCart({ id })
}

module.exports = {
  signup,
  login,
  addToCart,
  deleteItemFromCart,
  checkout
};