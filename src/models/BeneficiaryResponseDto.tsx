export interface BeneficiaryResponseDto {
  id: number; // O ID gerado automaticamente após o cadastro
  name: string;
  supportArea: string;
  dateFrom: string;
  dateTo: string;
  // Outras propriedades que você deseja acessar
}