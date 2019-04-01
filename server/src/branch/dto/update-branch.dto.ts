import { MaxLength, IsInt } from 'class-validator';
import { UpdateBranchInput } from '../../graphql.schema';

export class UpdateBranchDto extends UpdateBranchInput  {
    @IsInt()
    id: number;
    @IsInt()
    bankId: number;
    @MaxLength(255)
    name: string;
    @MaxLength(255)
    address: string;
}
