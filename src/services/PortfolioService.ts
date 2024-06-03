import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;





export const getPortfolio = async (userId:any) => {

  const response = await axios.get(`api/portfolio/stock/${userId}`);

  return response.data;
};

export const addStockToPortfolio = async (userId:any, symbol:any, quantity:any) => {
  const data = {
    userId: userId,
    symbol: symbol,
    quantity: quantity,
  };

  const response = await axios.post(`api/portfolio/stock`, data);
  return response.data;
};

export const updateStockQuantity = async (userId:any, symbol:any, quantity:any) => {
  const data = {
    userId: userId,
    symbol: symbol,
    quantity: quantity,
  };
  const response = await axios.put(`api/portfolio/stock`, data);
  return response.data;
};

export const liquidateStock = async (userId:any, symbol:any) => {
  const data = { userId, symbol };
  const response = await axios.delete(`api/portfolio/stock`, {
    data,
  });
  return response.data;
};

export const rebalancePortfolio = async (stocks:any) => {
  const data = { stocks };
  console.log("data going into rebalancer:", data);
  const response = await axios.post(`api/portfolio/rebalance`, data);

  return response.data;
};
