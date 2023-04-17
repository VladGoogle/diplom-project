import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://127.0.0.1:3001',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  })