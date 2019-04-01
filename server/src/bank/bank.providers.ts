import { Connection } from 'typeorm';
import { Bank } from './bank.entity';
import { BANK_REPOSITIRY_TOKEN, DB_CONNECTION_TOKEN } from '../constants';

export const bankProviders = [
  {
    provide: BANK_REPOSITIRY_TOKEN,
    useFactory: (connection: Connection) => connection.getRepository(Bank),
    inject: [DB_CONNECTION_TOKEN],
  },
];
