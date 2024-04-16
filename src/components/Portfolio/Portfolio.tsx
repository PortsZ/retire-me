"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import PortfolioTable from "./Portfolio.table";
import { useSession } from "next-auth/react";
import { addStockToPortfolio } from "@/services/PortfolioService";
import { useForm } from "react-hook-form";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [total, setTotal] = useState(0);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [shouldUpdate, setShouldUpdate] = useState(false);
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const { register, handleSubmit } = useForm();
  const { data } = useSession();
  const [userId, setUserId] = useState(null);

  const updatePortfolio = () => {
    setPortfolio([]);
    setShouldFetch(true);
  }

  useEffect(() => {
    if (data && shouldFetch && data.user && data.stocks) {
      setUserId(data.user.id);

      Promise.all(
        data.stocks.map((stock) => {
          return lookupStock(stock.symbol.toUpperCase()).then((res) => ({
            symbol: stock.symbol.toUpperCase(),
            price: res.price,
            quantity: stock.quantity,
          }));
        })
      ).then((stocks) => {
        setPortfolio(stocks);
        setShouldFetch(false);
        setShouldUpdate(true); // Trigger a re-calculation of the total
      });
    }
  }, [data, shouldFetch]);
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //====================================================================================================

  useEffect(() => {
    if (shouldUpdate) {
      setShouldUpdate(false);
      grandTotal();
    }
  }, [shouldUpdate, portfolio]);

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //====================================================================================================

  const lookupStock = async (smbl) => {
    const lookupRes = await axios.post(`${apiUrl}/api/lookup`, {
      symbol: smbl.toUpperCase(),
    });
    return lookupRes.data;
  };

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //====================================================================================================

  const addStock = async (data) => {
    console.log("data:", data.symbol);
    const lookupRes = await lookupStock(data.symbol);

    if (lookupRes) {
      console.log("data:", lookupRes);
      const symbol = lookupRes.symbol.toUpperCase();
      const quantity = parseInt(data.quantity);

      const addToDbRes = await addStockToPortfolio(userId, symbol, quantity);
      console.log("addToDbRes:", addToDbRes);
      if (addToDbRes) {
        // Update the portfolio state with the new stock

        setPortfolio([
          ...portfolio,
          {
            symbol: addToDbRes.symbol.toUpperCase(),
            price: lookupRes.price,
            quantity: addToDbRes.quantity,
          },
        ]);
        // Call grandTotal directly to recalculate the total
        grandTotal();

        console.log("portfolio:", portfolio);


      }
    }
  };

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  //====================================================================================================

  const grandTotal = () => {
    let total = 0;
    portfolio.forEach((stock) => {
      total += stock.price * stock.quantity;
    });
    setTotal(total);
  };

  useEffect(() => {
    grandTotal();
  }, [portfolio]);

  return (
    <div className="flex flex-col gap-10 w-full">
      <form
        onSubmit={handleSubmit(addStock)}
        className="w-full flex flex-col gap-2"
      >
        <h1 className="text-xl font-bold text-left">Portfolio</h1>
        <input
          className="bg-gray-700 p-2 rounded"
          type="text"
          placeholder="Stock Symbol"
          {...register("symbol", { required: true })}
        />
        <div className="w-full flex gap-3">
          <input
            className="bg-gray-700 p-2 rounded w-full"
            type="number"
            placeholder="Quantity"
            {...register("quantity", { required: true })}
          />
          <button
            className="rounded bg-gradient-to-tr from-lime-500 to-green-500 text-black px-4 p-2"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>

      <PortfolioTable
        portfolio={portfolio}
        total={total}
        setPortfolio={setPortfolio}
        userId={data.user.id}
      />
    </div>
  );
};

export default Portfolio;
