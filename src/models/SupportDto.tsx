import { VolunteerDto } from './VolunteerDto';
import { BeneficiaryDto } from './BeneficiaryDto';

export class SupportDto {
  volunteer: VolunteerDto = new VolunteerDto();
  beneficiary: BeneficiaryDto = new BeneficiaryDto();
  city: string = '';
  dateFrom: string = '';
  dateTo: string = '';
  supportArea: string = '';
}


