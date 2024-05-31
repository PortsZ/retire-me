import { prisma } from "@/lib/prisma";

export async function testTurso() {
  const users = await prisma.user.findMany();
  console.log("USERS: "+ users);
  return users;
}
