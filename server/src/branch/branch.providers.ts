import { Connection } from 'typeorm';
import { Branch } from './branch.entity';
import { BRANCH_REPOSITIRY_TOKEN, DB_CONNECTION_TOKEN } from '../constants';

export const branchProviders = [
  {
    provide: BRANCH_REPOSITIRY_TOKEN,
    useFactory: (connection: Connection) => connection.getRepository(Branch),
    inject: [DB_CONNECTION_TOKEN],
  },
];
