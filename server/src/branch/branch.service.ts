import { Injectable, Inject } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
import { BRANCH_REPOSITIRY_TOKEN } from '../constants';
import { Branch } from './branch.entity';
import { Branch as GqlBranch } from '../graphql.schema';
import { OrderType, Paged } from '../common/types';

@Injectable()
export class BranchService {
    constructor(
        @Inject(BRANCH_REPOSITIRY_TOKEN)
        private readonly branchRepository: Repository<Branch>,
    ) {}

    async findAll(): Promise<Branch[]> {
        return await this.branchRepository.find({ relations: ['bank']});
    }

    async findOneById(id: number): Promise<Branch> {
        return await this.branchRepository.findOne(id, { relations: ['bank']});
    }

    async findByBankId(bankId: number): Promise<Branch[]> {
        return await this.branchRepository.find({ relations: ['bank'], where: [{ bankId }] });
    }

    async findAllPaged(page: number, perPage: number, order: OrderType, orderBy: string): Promise<Paged<Branch>> {
        const take = perPage;
        const skip = page * perPage;

        const [result, total] = await this.branchRepository.findAndCount(
            {
                relations: ['bank'],
                order: { [orderBy]: order.toUpperCase() },
                take,
                skip,
            },
        );
        return {
            data: result,
            count: total,
            page,
            perPage,
        };
    }

    async create(branch: GqlBranch): Promise<Branch> {
        const entity = this.branchRepository.create(branch);
        return this.branchRepository.save(entity);
    }

    async update(branch: GqlBranch): Promise<Branch> {
        const originalEntity = await this.branchRepository.findOne(branch.id);
        Object.assign(originalEntity, branch);
        return this.branchRepository.save(originalEntity);
    }

    async delete(id: number): Promise<Branch> {
        const entity =  await this.branchRepository.findOne(id);
        await this.branchRepository.delete(id);
        return entity;
    }
}
