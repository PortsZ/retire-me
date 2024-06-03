import axios from "axios";

export async function POST(req: any) {
  const res = await req.json();

  const apiUrl = process.env.PYTHON_API_URL;
  const response = await axios.get(`${apiUrl}/lookup/${res.symbol}`);
  const data = response.data;

  return new Response(JSON.stringify(data));
}
