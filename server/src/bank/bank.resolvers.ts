import {ParseIntPipe} from '@nestjs/common';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';
import {PubSub} from 'graphql-subscriptions';
import {Bank} from '../graphql.schema';

import {CreateBankDto} from './dto/create-bank.dto';
import {BankService} from './bank.service';
import {UpdateBankDto} from './dto/update-bank.dto';
import { UserInputError } from 'apollo-server-core';
import { validateDto } from '../common/utils';

const pubSub = new PubSub();

@Resolver('Bank')
export class BankResolvers {
    constructor(private readonly bankService: BankService) {}

    @Query()
    async getBanks() {
        return await this
            .bankService
            .findAll();
    }

    @Query('bank')
    async findOneById(@Args('id', ParseIntPipe)id: number): Promise < Bank > {
        return await this
            .bankService
            .findOneById(id);
    }

    @Mutation('createBank')
    async create(@Args('createBankInput')args: CreateBankDto): Promise<Bank | { message: string, code: any, locations: string, path: string}> {
        const createBankDto = await validateDto(CreateBankDto, args);
        try {
            const entity = await this
                .bankService
                .create(createBankDto);
            pubSub.publish('bankCreated', {bankCreated: entity});
            return entity;
        } catch (error) {
            throw new UserInputError('Bank record with such name already exists', { fields: {name: 'Already exists' } });
        }
    }

    @Mutation('updateBank')
    async update(@Args('updateBankInput')args: UpdateBankDto): Promise < Bank > {
        const updateBankDto = await validateDto(UpdateBankDto, args);
        try {
            const entity = await this
                .bankService
                .update(updateBankDto);
            pubSub.publish('bankUpdated', {bankUpdated: entity});
            return entity;
        } catch (error) {
            throw new UserInputError('Bank record with such name already exists', { fields: {name: 'Already exists' } });
        }
    }

    @Mutation('deleteBank')
    async delete(@Args('id', ParseIntPipe)id: number): Promise < Bank > {
        const entity = await this
            .bankService
            .delete(id);
        pubSub.publish('bankDeleted', {bankDeleted: entity});
        return entity;
    }

    @Subscription('bankCreated')
    bankCreated() {
        return {
            subscribe: () => pubSub.asyncIterator('bankCreated'),
        };
    }

    @Subscription('bankUpdated')
    bankUpdated() {
        return {
            subscribe: () => pubSub.asyncIterator('bankUpdated'),
        };
    }

    @Subscription('bankDeleted')
    bankDeleted() {
        return {
            subscribe: () => pubSub.asyncIterator('bankDeleted'),
        };
    }
}
