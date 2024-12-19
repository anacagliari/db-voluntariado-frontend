
export class SupportDto {
  volunteer: { id: number } = { id: 0 };  // Objeto voluntário com campo 'id'
  beneficiary: { id: number } = { id: 0 }; // Objeto beneficiário com campo 'id'
  name: string = '';             // Nome do beneficiário
  supportArea: string = '';      // Área de suporte
  dateFrom: string = '';         // Data de início
  dateTo: string = '';           // Data de fim
}
