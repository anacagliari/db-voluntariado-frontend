import axios from "axios";
import { VolunteerDto } from "../models/VolunteerDto";

const api = axios.create({
  baseURL: "http://localhost:8080",
});


export const createVolunteer = async (volunteerData: VolunteerDto) => {
  const response = await api.post('/volunteers', volunteerData);
  return response.data;
};
