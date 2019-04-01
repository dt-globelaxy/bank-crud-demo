import { Connection } from 'typeorm';
import { Account } from './account.entity';
import { ACCOUNT_REPOSITIRY_TOKEN, DB_CONNECTION_TOKEN } from '../constants';

export const accountProviders = [
  {
    provide: ACCOUNT_REPOSITIRY_TOKEN,
    useFactory: (connection: Connection) => connection.getRepository(Account),
    inject: [DB_CONNECTION_TOKEN],
  },
];
