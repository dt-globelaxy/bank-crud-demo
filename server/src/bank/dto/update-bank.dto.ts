import { IsInt, MaxLength} from 'class-validator';
import { UpdateBankInput } from '../../graphql.schema';

export class UpdateBankDto extends UpdateBankInput {
    @IsInt()
    id: number;
    @MaxLength(255)
    name: string;
    notes: string;
}
