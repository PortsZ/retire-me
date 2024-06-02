"use client";
import React, { useState, useEffect, Suspense, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { rebalancePortfolio, getPortfolio } from "@/services/PortfolioService";

const features = [
  {
    name: "Me Aposenta!",
    url: "/retire",
    description: "Calculadora de Liberdade Financeira",
    style: "from-sky-300 to-sky-500",
  },
  {
    name: "Calculadora de Financiamento",
    url: "/financing",
    description:
      "Calcule qualquer incognita do seu financiamento com apenas 3 dados",
    style: "from-lime-400 to-green-500",
  },
  {
    name: "Assistente de Criação de Portfólio",
    description: "Em breve!",
    enabled: "disabled",
    disabledMessage: "Em breve!",
    disabledStyle: "from-slate-100 to-slate-400 opacity-60 cursor-not-allowed",
  },
  {
    name: "Rebalanceamento de Portfólio",
    description: "Gerencie seu portfolio",
    style: "from-fuchsia-500 to-rose-400 cursor-not-allowed",
  },
];

const Features = ({ sessionData }:any) => {
  const [formatedPortfolio, setFormatedPortfolio] = useState(null); // [ { symbol: "AAPL", quantity: 10 }, ...
  const [selectedRebalance, setSelectedRebalance] = useState(null);
  const [rebalanceData, setRebalanceData] = useState<any|null>(null);


  const handleCardClick = async (index:any) => {
    const portfolio = await formatPortfolioData();

    setFormatedPortfolio(portfolio);
    setSelectedRebalance(index);
  };

  const formatPortfolioData = async () => {

    const portfolio = await getPortfolio(sessionData.user.id);


    let stocks = {} as any;
    portfolio.forEach((stock:any) => {
      stocks[stock.symbol] = stock.quantity;
    });
    return stocks;
  };

  useEffect(() => {
    if (formatedPortfolio) {
      rebalancePortfolio(formatedPortfolio).then((res) => {
        setRebalanceData(res);
      });
    }
  }, [formatedPortfolio]);

  return (
    <div className="grid grid-cols-2 gap-2 p-2">
      {features.map((feature, index) => {
        if (feature.name === "Rebalanceamento de Portfólio") {
          return (
            <React.Fragment key={index}>
              <motion.div
                
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                layoutId={index.toString()}
                className={`${feature.style} p-4 text-black bg-gradient-to-tr rounded-lg cursor-pointer select-none`}
                onClick={() => handleCardClick(index)}
              >
                <h3 className="text-xl font-medium">{feature.name}</h3>
                <p className="text-slate-900 italic">{feature.description}</p>
              </motion.div>

              <AnimatePresence>
                {selectedRebalance && (
                  <motion.div
                    onClick={() => {
                      setSelectedRebalance(null);
                      setRebalanceData(null);
                    }}

                    className=" bg-black bg-opacity-30 backdrop-blur-xl fixed top-0 right-0 left-0 bottom-0  flex justify-center items-center"
                  >
                    <motion.div
                      layoutId={selectedRebalance}
                      onClick={(e) => e.stopPropagation()}
                      className="flex p-20 justify-center items-center flex-col rounded bg-gradient-to-tr from-fuchsia-500 to-rose-400"
                    >
                        {!rebalanceData && <div className='animate-pulse'>Loading ...</div>}
                        {rebalanceData && (
                          <div className="overflow-x-auto w-full rounded">
                            <table className="min-w-full leading-normal rounded">
                              <thead className="">
                                <tr>
                                  <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Symbol
                                  </th>
                                  <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Adjusted Market Values
                                  </th>
                                  <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Adjusted Quantities
                                  </th>
                                  <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Sharpe Ratios
                                  </th>
                                  <th className="px-5 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                    Weights
                                  </th>
                                </tr>
                              </thead>
                              <tbody className='text-gray-600 text-right' >
                                {Object.keys(
                                  rebalanceData.portfolio[
                                    "Adjusted Market Values"
                                  ]
                                ).map((symbol) => (
                                  <tr key={symbol}>
                                    <td className="text-left px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      {symbol}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      {rebalanceData.portfolio[
                                        "Adjusted Market Values"
                                      ][symbol].toFixed(2)}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      {
                                        rebalanceData.portfolio[
                                          "Adjusted Quantities"
                                        ][symbol]
                                      }
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      {rebalanceData.portfolio["Sharpe Ratios"][
                                        symbol
                                      ].toFixed(4)}
                                    </td>
                                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                      {
                                        rebalanceData.portfolio["Weights"][
                                          symbol
                                        ]
                                      }
                                    </td>
                                  </tr>
                                ))}
                              </tbody>

                              <tfoot>
                                <tr>
                                  <td
                                    colSpan={5}
                                    className="px-5 py-5 border-b border-gray-200 bg-white text-slate-600 text-sm font-bold"
                                  >
                                    Total Adjusted Market Value:{" "}
                                    {rebalanceData.total_adjusted_market_value.toFixed(
                                      2
                                    )}
                                  </td>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                        )}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </React.Fragment>
          );
        }
        return (
          <Link key={index} href={feature.url ? feature.url : "#"}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`${
                feature.enabled === "disabled"
                  ? feature.disabledStyle
                  : feature.style
              } p-4 text-black bg-gradient-to-tr rounded-lg cursor-pointer select-none`}
            >
              <h3 className="text-xl font-medium">{feature.name}</h3>
              <p className="text-slate-900 italic">{feature.description}</p>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default Features;
