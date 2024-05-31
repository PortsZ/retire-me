import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

const libsql = createClient({
  url: "libsql://retire-me-portsz.turso.io",
  authToken: process.env.TURSO_AUTH_TOKEN,
});

const adapter = new PrismaLibSQL(libsql);
export const prisma = new PrismaClient({ adapter });
