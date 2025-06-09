import axios from 'axios'

const API = "https://backinnova.onrender.com/app/register/";
export const registerrequest = user => axios.post(`${API}`, user)

const API2 = "https://backinnova.onrender.com/app/login/";
export const loginRequest = user => axios.post(`${API2}`, user);


