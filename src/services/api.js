import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-dental-system-production.up.railway.app/'
});

export default api;