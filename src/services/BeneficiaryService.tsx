import axios from "axios";
import { BeneficiaryDto } from "../models/BeneficiaryDto";


const api = axios.create({
  baseURL: "http://localhost:8080",
});


export const createBeneficiary = async (beneciciaryData: BeneficiaryDto) => {
  const response = await api.post('/beneficiary', beneciciaryData);
  return response.data;
};
