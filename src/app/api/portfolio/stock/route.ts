import {prisma} from "@/lib/prisma";

interface StockData {
  symbol: string;
  quantity: number;
}



export async function POST(req) {
  const { userId, symbol, quantity } = await req.json();

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { portfolio: true },
  });

  if (user && user.portfolio) {
    const newStock = await prisma.stock.create({
      data: {
        symbol: symbol,
        quantity: quantity,
        portfolioId: user.portfolio.id,
      },
    });
    return new Response(JSON.stringify(newStock));
  } else {
    return new Response(
      JSON.stringify({ error: "User or portfolio not found" }),
      {
        status: 404,
      }
    );
  }
}

export async function PUT(req) {
  const { userId, symbol, quantity } = await req.json();

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
    // Find the specific stock
    const stock = user.portfolio.stocks.find(s => s.symbol === symbol);

    if (stock) {
      const updatedStock = await prisma.stock.update({
        where: { id: stock.id }, // Update by stock ID
        data: { quantity: quantity }, // Update the quantity
      });
      return new Response(JSON.stringify(updatedStock));
    } else {
      return new Response(JSON.stringify({ error: "Stock not found" }), {
        status: 404,
      });
    }
  } else {
    return new Response(JSON.stringify({ error: "User or portfolio not found" }), {
      status: 404,
    });
  }
}


export async function DELETE(req) {
  const { userId, symbol } = await req.json();

  console.log(userId, symbol);

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
    // Find the specific stock
    const stock = user.portfolio.stocks.find(s => s.symbol === symbol);

    if (stock) {
      const deletedStock = await prisma.stock.delete({
        where: { id: stock.id }, // Delete by stock ID
      });
      return new Response(JSON.stringify(deletedStock));
    } else {
      return new Response(JSON.stringify({ error: "Stock not found" }), {
        status: 404,
      });
    }
  } else {
    return new Response(JSON.stringify({ error: "User or portfolio not found" }), {
      status: 404,
    });
  }
}
