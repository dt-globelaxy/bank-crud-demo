import { MaxLength, IsInt } from 'class-validator';
import { CreateBranchInput } from '../../graphql.schema';

export class CreateBranchDto extends CreateBranchInput  {
    @IsInt()
    bankId: number;
    @MaxLength(255)
    name: string;
    @MaxLength(255)
    address: string;
}
