import axios from 'axios';

export const dogApiInstance = axios.create({
  baseURL: 'https://dog.ceo/api',
  headers: {
    'Content-Type': 'application/json'
  }
});
