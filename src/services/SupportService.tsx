import axios from "axios";
import { SupportDto } from "../models/SupportDto";



const api = axios.create({
  baseURL: "http://localhost:8080",
});


export const createSupport = async (supportData: SupportDto) => {
  const response = await api.post('/volunteers/support', supportData);
  return response.data;
};

export const getSupport = async () => {
  const response = await api.get('/volunteers/support');
  return response.data;
};