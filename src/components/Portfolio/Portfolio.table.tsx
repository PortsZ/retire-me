import React, { useState } from "react";
import { updateStockQuantity, liquidateStock } from "@/services/PortfolioService";

const PortfolioTable = ({ portfolio, total, setPortfolio, userId }) => {
  const [editingRow, setEditingRow] = useState(null);
  const [newQuantity, setNewQuantity] = useState({});

  const handleEdit = (index, stock) => {
    setEditingRow(index);
    setNewQuantity({ ...newQuantity, [stock.symbol]: stock.quantity });
  };

  const handleQuantityChange = (symbol, quantity) => {
    setNewQuantity({ ...newQuantity, [symbol]: quantity });
  };

  const handleUpdate = async (symbol) => {
    const quantity = newQuantity[symbol];
    await updateStockQuantity(userId, symbol, quantity);
    setEditingRow(null);

    setPortfolio((prevPortfolio) => {
      return prevPortfolio.map(stock => {
        if (stock.symbol === symbol) {
          return { ...stock, quantity: quantity };
        }
        return stock;
      });
    });
  };

  const handleDelete = async (symbol) => {
    await liquidateStock(userId, symbol);

    setPortfolio((prevPortfolio) => {
      return prevPortfolio.filter(stock => stock.symbol !== symbol);
    });
  };

  return (
    <div className="w-full overflow-x-auto bg-gray-800 rounded">
      <table className="w-full text-left border-collapse text-gray-200 rounded">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-4 py-2 border-b border-gray-600">Symbol</th>
            <th className="px-4 py-2 border-b border-gray-600">Price</th>
            <th className="px-4 py-2 border-b border-gray-600">Quantity</th>
            <th className="px-4 py-2 border-b border-gray-600">Total $</th>
            <th className="px-4 py-2 border-b border-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {portfolio.map((stock, index) => (
            <tr key={index} className="hover:bg-gray-600">
              <td className="px-4 py-2 border-b border-gray-600">
                {stock.symbol}
              </td>
              <td className="px-4 py-2 border-b border-gray-600">
                {stock.price}
              </td>
              <td className="px-4 py-2 border-b border-gray-600">
                {editingRow === index ? (
                  <input
                    type="number"
                    className="bg-gray-700 p-2 rounded"
                    value={newQuantity[stock.symbol] || stock.quantity}
                    onChange={(e) => handleQuantityChange(stock.symbol, parseInt(e.target.value, 10))}
                  />
                ) : (
                  stock.quantity
                )}
              </td>
              <td className="px-4 py-2 border-b border-gray-600">
                {(stock.price * stock.quantity).toFixed(2)}
              </td>
              <td className="px-4 py-2 border-b border-gray-600">
                {editingRow === index ? (
                  <div className="flex gap-2">
                    <button onClick={() => handleUpdate(stock.symbol)} className="rounded bg-gradient-to-tr from-blue-500 to-sky-500 text-black px-4 p-2">
                      Update
                    </button>
                    <button onClick={() => setEditingRow(null)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded">
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(index, stock)} className="rounded bg-gradient-to-tr from-lime-500 to-green-500 text-black px-4 p-2">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(stock.symbol)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded">
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
          <tr className="bg-gray-700 font-bold">
            <td className="px-4 py-2 border-b border-gray-600" colSpan="3">
              Total Portfolio Value
            </td>
            <td className="text-center px-4 py-2 border-b border-gray-600" colSpan="2">
              {total.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;
