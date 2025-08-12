import axios from 'axios';

const API= axios.create({
  baseURL: import.meta.env.API_URL|| 'https://3000/api'})

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) config.headers.Authorization= `Bearer ${token}`;
  return config;
})

export default {
  login:(creds) => API.post('/auth/login', creds).then(r=>r.data),
  register:(data)=> API.post('/auth/register', data).then(r=>r.data),
  getDevices:() => API.get('/devices').then(r=>r.data),
  registerDevice:(data) => API.post('/devices', data).then(r=>r.data),
  sendLocation:(id,loc) => API.post('/devices/${id}/location', loc).then(r=>r.data),
  createAlert:(payload) => API.post('/alerts', payload).then(r=>r.data),
  getAlerts:() => API.get('/alerts').then(r=>r.data),
}