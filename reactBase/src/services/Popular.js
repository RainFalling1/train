import axios from 'axios';

// eslint-disable-next-line no-return-await
export const getAll = async (num) => await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories&page=${num}&per_page=10`, {
  headers: {
    // 'x-ratelimit-limit': 60,
  },
// eslint-disable-next-line no-unused-vars
}).catch((err) => {
  // alert(14664)
});

// eslint-disable-next-line no-return-await
export const getMoreByUrl = async (type, num) => await axios.get(`https://api.github.com/search/repositories?q=stars:%3E1${type}&sort=stars&order=desc&type=Repositories&page=${num}&per_page=10`);
