import { prisma } from '@/lib/prisma';
import { User, Prisma } from '@prisma/client';

export async function CreateUser(user:any): Promise<User | undefined> {
  try {
    // Extract username from email
    const username = user.email.substring(0, user.email.lastIndexOf("@")) || null;

    // Create user and empty portfolio
    const newUser = await prisma.user.create({
      data: {
        email: user.email,
        username: username,
        password: user.password ? user.password : null,
        portfolio: {
          create: {}, // Create an empty portfolio associated with the user
        },
      },
    });

    return newUser;

  } catch (e) {
    if (
      e instanceof Prisma.PrismaClientKnownRequestError &&
      e.code === 'P2002'
    ) {
      const target = e.meta?.target;
      if (Array.isArray(target) && target.includes('email')) {
        throw 'Email already exists';
      } else if (Array.isArray(target) && target.includes('username')) {
        throw 'Username already exists';
      } else {
        throw 'Unknown error occurred while creating user';
      }
    }
    throw e;
  }
}
