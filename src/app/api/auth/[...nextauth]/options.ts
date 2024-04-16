import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

const bcrypt = require("bcrypt");



export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        identifier: {
          label: "Username or Email",
          type: "text",
          placeholder: "username or email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<any> {

        if (!credentials) return null;

        const isEmail = true;
        let user;

        if (isEmail) {
          user = await prisma.user.findUnique({
            where: {
              email: credentials.identifier,
            },
          });
        }
        if (
          user &&
          (await bcrypt.compare(credentials.password, user.password))
        ) {
          console.log(user)
          return user;
        }

        throw new Error("credenciais inválidas");
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }): Promise<boolean> {
      if (account?.type === "credentials") {

        return true;
      }


      if (!user || !account || !profile || !user.email) return false;
      return true;
    },

    //*SESSION=================================
    async session({ session, user }: any) {
      if (session.user && typeof session.user.email === "string") {
        const dbUser = await prisma.user.findUnique({
          where: {
            email: session.user.email,
          },
          include: {
            portfolio: {
              include: {
                stocks: true, // Eagerly load the stocks associated with the portfolio
              },
            },
          },
        });

        if (dbUser) {
          // Add the user ID and other details to the session
          session.user.id = dbUser.id;
          session.username = dbUser.username;
          session.portfolio = dbUser.portfolio;

          // If the portfolio exists, also add the stocks to the session
          if (dbUser.portfolio) {
            session.stocks = dbUser.portfolio.stocks;
          }
        }
      }

      return session;
    },

    //*SESSION=================================
  },
  pages: {
    signIn: "/auth/sign-in",
    signOut: "/auth/sign-out",
  },
};
