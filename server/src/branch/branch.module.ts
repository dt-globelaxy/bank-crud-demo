import { Module } from '@nestjs/common';
import { BranchService } from './branch.service';
import { branchProviders } from './branch.providers';
import { DatabaseModule } from '../database/database.module';
import { BranchResolvers } from './branch.resolvers';

@Module({
    imports: [DatabaseModule],
    providers: [
        ...branchProviders,
        BranchService,
        BranchResolvers,
    ],
})
export class BranchModule {}
