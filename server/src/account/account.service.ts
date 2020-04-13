import { Injectable, Inject } from '@nestjs/common';
import { Repository, OrderByCondition } from 'typeorm';
import { ACCOUNT_REPOSITIRY_TOKEN } from '../constants';
import { Account } from './account.entity';
import { Account as GqlAccount } from '../graphql.schema';
import { OrderType, Paged } from '../common/types';

@Injectable()
export class AccountService {
  constructor(
    @Inject(ACCOUNT_REPOSITIRY_TOKEN)
    private readonly accountRepository: Repository<Account>,
  ) {}

  async findAll(): Promise<Account[]> {
    return await this.accountRepository.find({ relations: ['bank', 'branch'] });
  }

  async findOneById(id: number): Promise<Account> {
    return await this.accountRepository.findOne(id, {
      relations: ['bank', 'branch'],
    });
  }

  async findAllPaged(
    page: number = 0,
    perPage: number = 5,
    order: OrderType = OrderType.asc,
    orderBy: string = 'account.holdersName',
    fromNumber?: number | undefined,
    toNumber?: number | undefined,
  ): Promise<Paged<Account>> {
    const take = perPage;
    const skip = page * perPage;

    let where = '';
    if (fromNumber || fromNumber === 0) {
      where = `account.number >= ${fromNumber}`;
    }
    if (toNumber || toNumber === 0) {
      const prefix = where.length > 0 ? `${where} and ` : '';
      where = `${prefix}account.number <= ${toNumber}`;
    }
    let query = this.accountRepository
      .createQueryBuilder('account')
      .leftJoinAndSelect('account.bank', 'bank')
      .leftJoinAndSelect('account.branch', 'branch');
    if (where) {
      query = query.where(where);
    }
    const orderByProp =
      orderBy.indexOf('.') > -1 ? orderBy : 'account.' + orderBy;
    const [result, total] = await query
      .orderBy({
        [orderByProp]: order.toUpperCase(),
      } as OrderByCondition)
      .take(take)
      .skip(skip)
      .getManyAndCount();

    return {
      data: result,
      count: total,
      page,
      perPage,
    };
  }

  async create(account: GqlAccount): Promise<Account> {
    const entity = this.accountRepository.create(account);
    return this.accountRepository.save(entity);
  }

  async update(account: GqlAccount): Promise<Account> {
    const originalEntity = await this.accountRepository.findOne(account.id);
    const entity = this.accountRepository.create(account);
    Object.assign(originalEntity, account);
    return this.accountRepository.save(entity);
  }

  async delete(id: number): Promise<Account> {
    const entity = await this.accountRepository.findOne(id);
    await this.accountRepository.delete(id);
    return entity;
  }
}
