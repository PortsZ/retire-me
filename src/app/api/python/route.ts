import axios from 'axios';

export async function POST(req:any) {
  const res = await req.json();

  const response = await axios.post('api/python/lookup', res);
  const data = response.data;

  return new Response(JSON.stringify(data))
}
