import { prisma } from "@/lib/prisma";

export async function GET(
  request: any,
  { params }: { params: { id: string } }
) {
  const userId = params.id[0]; // Use `userId` instead of `params.id`

  console.log("\nUser ID:", userId);

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        portfolio: {
          include: {
            stocks: true, // Include stocks in the portfolio
          },
        },
      },
    });

    if (user && user.portfolio) {
      return new Response(JSON.stringify(user.portfolio.stocks));
    } else {
      return new Response(
        JSON.stringify({ error: "User or portfolio not found" }),
        {
          status: 404,
        }
      );
    }
  } catch (error) {
    console.error("Error fetching portfolio:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
