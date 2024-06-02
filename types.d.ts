// types.d.ts
import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email: string;
    };
    portfolio?: any;
    stocks?: any;
  }
  
}
