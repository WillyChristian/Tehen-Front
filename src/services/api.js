import axios from 'axios';

const api = axios.create({ baseURL: 'http://tehen-app.herokuapp.com' });

export default api;
