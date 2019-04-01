import { MaxLength, MinLength } from 'class-validator';
import { CreateBankInput } from '../../graphql.schema';

export class CreateBankDto extends CreateBankInput  {
    @MaxLength(255)
    @MinLength(3)
    name: string;
    notes: string;
}
