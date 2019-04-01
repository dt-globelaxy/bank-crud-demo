import { createConnection } from 'typeorm';
import { ConfigService } from '../config/config.service';
import { DB_CONNECTION_TOKEN } from '../constants';
import { ConfigModule } from '../config/config.module';

export const databaseProviders = [
  {
    imports: [ConfigModule],
    provide: DB_CONNECTION_TOKEN,
    useFactory: async (configService: ConfigService) => await createConnection({
      type: 'mysql',
      host: configService.databaseHost,
      port: configService.databasePort,
      username: configService.databaseUser,
      password: configService.databasePassword,
      database: configService.databaseName,
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
    inject: [ConfigService],
  },
];
