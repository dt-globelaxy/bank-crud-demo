import { Module } from '@nestjs/common';
import { AccountService } from './account.service';
import { accountProviders } from './account.providers';
import { DatabaseModule } from '../database/database.module';
import { AccountResolvers } from './account.resolvers';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...accountProviders,
        AccountService,
        AccountResolvers,
    ],
})
export class AccountModule {}
