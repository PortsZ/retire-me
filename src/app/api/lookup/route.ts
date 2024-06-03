import axios from "axios";

export async function POST(req: any) {
  console.log("req:", req);
  const res = await req.json();

  const apiUrl = process.env.PYTHON_API_URL;
  const data = "CARALHO Q NERVOSO";
  // const response = await axios.post(`${apiUrl}/api/python/lookup`, res);
  // const data = response.data;

  return new Response(JSON.stringify(data));
}
