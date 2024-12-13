import axios from "axios";
import { BeneficiaryDto } from "../models/BeneficiaryDto";


const api = axios.create({
  baseURL: "http://localhost:8080",
});


export const createBeneficiary = async (beneficiaryData: BeneficiaryDto) => {
  const response = await api.post('/beneficiaries', beneficiaryData);
  return response.data;
};

export const getBeneficiary = async () => {
  const response = await api.get('/beneficiaries');
  return response.data;
};