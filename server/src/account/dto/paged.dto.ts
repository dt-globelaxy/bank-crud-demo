import { IsNumber, IsIn, IsString, Min } from 'class-validator';
import { AccountPagedInput } from '../../graphql.schema';
import { OrderType } from '../../common/types';

export class AccountsPagedInputDto extends AccountPagedInput {
  @Min(0)
  @IsNumber()
  page: number;

  @Min(1)
  @IsNumber()
  perPage: number;

  @IsIn([OrderType.asc, OrderType.desc])
  order: OrderType;

  @IsString()
  orderBy: string;

  fromNumber?: number | undefined;

  toNumber?: number | undefined;
}
