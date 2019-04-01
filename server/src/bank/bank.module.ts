import { Module } from '@nestjs/common';
import { BankService } from './bank.service';
import { bankProviders } from './bank.providers';
import { DatabaseModule } from '../database/database.module';
import { BankResolvers } from './bank.resolvers';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...bankProviders,
        BankService,
        BankResolvers,
    ],
})
export class BankModule {}
