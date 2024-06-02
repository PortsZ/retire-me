import axios from 'axios';

export async function get() {


  const response = await axios.get('http://127.0.0.1:5328/api');
  const data = response.data;

  return new Response(JSON.stringify(data))
}
