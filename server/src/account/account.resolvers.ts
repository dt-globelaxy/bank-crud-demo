import {ParseIntPipe} from '@nestjs/common';
import {Args, Mutation, Query, Resolver, Subscription} from '@nestjs/graphql';
import {PubSub} from 'graphql-subscriptions';
import {Account} from '../graphql.schema';

import {CreateAccountDto} from './dto/create-account.dto';
import {AccountService} from './account.service';
import {UpdateAccountDto} from './dto/update-account.dto';
import { AccountsPagedInputDto } from './dto/paged.dto';

const pubSub = new PubSub();

@Resolver('Account')
export class AccountResolvers {
    constructor(private readonly accountService: AccountService) {}

    @Query()
    async getAccounts(
        @Args('pagedInput') pagedInput: AccountsPagedInputDto,
    ) {
        return await this.accountService.findAllPaged(
            pagedInput.page,
            pagedInput.perPage,
            pagedInput.order,
            pagedInput.orderBy,
            pagedInput.fromNumber,
            pagedInput.toNumber,
          );
    }

    @Query('account')
    async findOneById(@Args('id', ParseIntPipe)id: number): Promise <Account> {
        return await this
            .accountService
            .findOneById(id);
    }

    @Mutation('createAccount')
    async create(@Args('createAccountInput')args: CreateAccountDto): Promise <Account> {
        const entity = await this
            .accountService
            .create(args);
        pubSub.publish('accountCreated', {accountCreated: entity});
        return entity;
    }

    @Mutation('updateAccount')
    async update(@Args('updateAccountInput')args: UpdateAccountDto): Promise <Account> {
        const entity = await this
            .accountService
            .update(args);
        pubSub.publish('accountUpdated', {accountUpdated: entity});
        return entity;
    }

    @Mutation('deleteAccount')
    async delete(@Args('id', ParseIntPipe)id: number): Promise <Account> {
        const entity = await this
            .accountService
            .delete(id);
        pubSub.publish('accountDeleted', {accountDeleted: entity});
        return entity;
    }

    @Subscription('accountCreated')
    accountCreated() {
        return {
            subscribe: () => pubSub.asyncIterator('accountCreated'),
        };
    }

    @Subscription('accountUpdated')
    accountUpdated() {
        return {
            subscribe: () => pubSub.asyncIterator('accountUpdated'),
        };
    }

    @Subscription('accountDeleted')
    accountDeleted() {
        return {
            subscribe: () => pubSub.asyncIterator('accountDeleted'),
        };
    }
}
