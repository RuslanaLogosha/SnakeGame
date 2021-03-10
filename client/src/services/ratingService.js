// export async function createUser(data) {
//   const response = await fetch(`/api/api/ratings`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ user: data }),
//   });
//   return await response.json();
// }

import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/ratings/';

async function fetchRatings() {
  try {
    const ratings = await axios();
    return ratings;
  } catch (error) {
    new Error('No response from server');
  }
}

async function createRatings(body) {
  const { name, id, score } = body;
  try {
    const ratings = await axios({
      method: 'post',
      url: 'http://localhost:5000/api/ratings/',
      data: {
        name,
        id,
        score,
      },
    });
    return ratings;
  } catch (error) {
    new Error('No response from server');
  }
}

const api = { fetchRatings, createRatings };

export default api;
