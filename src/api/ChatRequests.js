import axios from "axios"


const API = axios.create({ baseURL: 'https://social-backend-1-9dhn.onrender.com' });




export const userChats = (id) => API.get(`/chat/${id}`);

//venky
export const chatSchedule=(formdata)=>API.post("/chat/",formdata)

//export const chatFind=(id, userId)=API.get(`/chat/find/${id}/${userId}`)

