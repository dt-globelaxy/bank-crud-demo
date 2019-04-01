import {ParseIntPipe} from '@nestjs/common';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';
import {PubSub} from 'graphql-subscriptions';
import {Branch} from '../graphql.schema';

import {CreateBranchDto} from './dto/create-branch.dto';
import {BranchService} from './branch.service';
import {UpdateBranchDto} from './dto/update-branch.dto';

const pubSub = new PubSub();

@Resolver('Branch')
export class BranchResolvers {
    constructor(private readonly branchService: BranchService) {}

    @Query()
    async getBranches() {
        return await this
            .branchService
            .findAll();
    }

    @Query()
    async getBankBranches(@Args('bankId', ParseIntPipe)bankId: number) {
        return await this
            .branchService
            .findByBankId(bankId);
    }

    @Query('branch')
    async findOneById(@Args('id', ParseIntPipe)id: number): Promise < Branch > {
        return await this
            .branchService
            .findOneById(id);
    }

    @Mutation('createBranch')
    async create(@Args('createBranchInput')args: CreateBranchDto): Promise < Branch > {
        const entity = await this
            .branchService
            .create(args);
        pubSub.publish('branchCreated', {branchCreated: entity});
        return entity;
    }

    @Mutation('updateBranch')
    async update(@Args('updateBranchInput')args: UpdateBranchDto): Promise < Branch > {
        const entity = await this
            .branchService
            .update(args);
        pubSub.publish('branchUpdated', {branchUpdated: entity});
        return entity;
    }

    @Mutation('deleteBranch')
    async delete(@Args('id', ParseIntPipe)id: number): Promise < Branch > {
        const entity = await this
            .branchService
            .delete(id);
        pubSub.publish('branchDeleted', {branchDeleted: entity});
        return entity;
    }

    @Subscription('branchCreated')
    branchCreated() {
        return {
            subscribe: () => pubSub.asyncIterator('branchCreated'),
        };
    }

    @Subscription('branchUpdated')
    branchUpdated() {
        return {
            subscribe: () => pubSub.asyncIterator('branchUpdated'),
        };
    }

    @Subscription('branchDeleted')
    branchDeleted() {
        return {
            subscribe: () => pubSub.asyncIterator('branchDeleted'),
        };
    }
}
