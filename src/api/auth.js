import axios from 'axios'

const API = "https://backinnova.onrender.com/myapp/register/";
export const registerrequest = user => axios.post(`${API}`, user)

const API2 = "https://backinnova.onrender.com/myapp/login/";
export const loginRequest = user => axios.post(`${API2}`, user);


