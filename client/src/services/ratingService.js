// export async function getAllRatings() {
//   const response = await fetch('/api/api/ratings');
//   return await response.json();
// }

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
    console.log(ratings);
    return ratings;
  } catch (error) {
    new Error('No response from server');
  }
}

const api = { fetchRatings };

export default api;
