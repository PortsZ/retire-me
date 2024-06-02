import axios from 'axios';

export async function POST(req:any) {
  const res = await req.json();

  const response = await axios.post('http://127.0.0.1:5328/api/rebalance', res);
  const data = response.data;

  return new Response(JSON.stringify(data))
}
