import { prisma } from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
    

  console.log("USERS: " + users);
  return new Response(JSON.stringify(users));
}