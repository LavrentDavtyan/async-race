import axios from 'axios';

const PORT = 3000;
const baseURL = `http://localhost:${PORT}`;

const client = axios.create({ baseURL, timeout: 20000 });


export default client;