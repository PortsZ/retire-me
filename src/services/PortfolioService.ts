import axios from "axios";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;





export const getPortfolio = async (userId:any) => {

  const response = await axios.get(`${apiUrl}/api/portfolio/stock/${userId}`);

  return response.data;
};

export const addStockToPortfolio = async (userId:any, symbol:any, quantity:any) => {
  const data = {
    userId: userId,
    symbol: symbol,
    quantity: quantity,
  };
  const response = await axios.post(`${apiUrl}/api/portfolio/stock`, data);
  return response.data;
};

export const updateStockQuantity = async (userId:any, symbol:any, quantity:any) => {
  const data = {
    userId: userId,
    symbol: symbol,
    quantity: quantity,
  };
  const response = await axios.put(`${apiUrl}/api/portfolio/stock`, data);
  return response.data;
};

export const liquidateStock = async (userId:any, symbol:any) => {
  const data = { userId, symbol };
  const response = await axios.delete(`${apiUrl}/api/portfolio/stock`, {
    data,
  });
  return response.data;
};

export const rebalancePortfolio = async (stocks:any) => {
  const data = { stocks };
  const response = await axios.post(`${apiUrl}/api/portfolio/rebalance`, data);

  console.log(response.data);
  return response.data;
};
