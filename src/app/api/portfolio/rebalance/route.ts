import axios from 'axios';

export async function POST(req:any) {
  const res = await req.json();
  const apiUrl = process.env.PYTHON_API_URL;

  const response = await axios.post(`api/python/rebalance`, res);
  const data = response.data;

  return new Response(JSON.stringify(data))
}
