import axios from "axios";
import { SupportDto } from "../models/SupportDto";
import { SupportResponseDto } from "../models/SupportResponse.Dto";




const api = axios.create({
  baseURL: "http://localhost:8080",
});


export const createSupport = async (supportData: SupportDto) => {
  try {
    const response = await axios.post('http://localhost:8080/volunteers/support', {
      volunteer: {
        id: supportData.volunteer.id
      },
      beneficiary: {
        id: supportData.beneficiary.id
      },
      dateFrom: supportData.dateFrom,
      dateTo: supportData.dateTo,
      supportArea: supportData.supportArea
    });

    console.log('Suporte criado com sucesso:', response.data);
  } catch (error) {
    console.error('Erro ao criar suporte:', error);
  }
};

export const getSupport = async (): Promise<SupportResponseDto[]> => {
  const response = await api.get('/volunteers/support');
  return response.data;
};