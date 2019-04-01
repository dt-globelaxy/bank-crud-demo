import { IsInt, MaxLength, IsEnum, Min, Max, IsNumber} from 'class-validator';
import { CreateAccountInput } from '../../graphql.schema';
import { AccountType } from '../account.entity';

export class CreateAccountDto extends CreateAccountInput {
    @MaxLength(255)
    holdersName: string;

    @MaxLength(255)
    employeeName: string;

    @IsInt()
    bankId: number;

    @IsInt()
    branchId: number;

    @IsEnum(AccountType)
    type: AccountType;

    @IsInt()
    @Min(0)
    @Max(9999999)
    number: number;

    @IsNumber()
    @Min(0)
    @Max(999999999999999)
    employeeNumber: bigint;
}
