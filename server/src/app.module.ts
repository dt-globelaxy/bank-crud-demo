import * as GraphQLBigInt from 'graphql-bigint';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';
import { BankModule } from './bank/bank.module';
import { BranchModule } from './branch/branch.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [
    ConfigModule,
    CommonModule,
    DatabaseModule,
    BankModule,
    BranchModule,
    AccountModule,
    GraphQLModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        typePaths: ['./**/*.graphql'],
        resolvers: { BigInt: GraphQLBigInt },
        debug: configService.isDevelopment,
        playground: configService.isDevelopment,
        installSubscriptionHandlers: true,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
