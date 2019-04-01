import { Injectable, Inject } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
import { BANK_REPOSITIRY_TOKEN } from '../constants';
import { Bank } from './bank.entity';
import { Bank as GqlBank } from '../graphql.schema';

@Injectable()
export class BankService {
    constructor(
        @Inject(BANK_REPOSITIRY_TOKEN)
        private readonly bankRepository: Repository<Bank>,
    ) {}

    async findAll(): Promise<Bank[]> {
        return await this.bankRepository.find();
    }

    async findOneById(id: number): Promise<Bank> {
        return await this.bankRepository.findOne(id);
    }

    async findOneByName(name: string): Promise<Bank> {
        return await this.bankRepository.findOne({ name: Like(`%${name}%`)});
    }

    async create(bank: GqlBank): Promise<Bank> {
        const entity = this.bankRepository.create(bank);
        return this.bankRepository.save(entity);
    }

    async update(bank: GqlBank): Promise<Bank> {
        const originalEntity = await this.bankRepository.findOne(bank.id);
        Object.assign(originalEntity, bank);
        return this.bankRepository.save(originalEntity);
    }

    async delete(id: number): Promise<Bank> {
        const entity =  await this.bankRepository.findOne(id);
        await this.bankRepository.delete(id);
        return entity;
    }
}
