import * as dotenv from 'dotenv';
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let service: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ConfigService,
          useValue: new ConfigService(`${process.env.NODE_ENV}.env`),
        },
      ],
    }).compile();

    service = module.get<ConfigService>(ConfigService);
  });

  it('should throw error', () => {
    const testConfig = dotenv.parse(`DATABASE_PORT=test`);
    expect(() => service.validateInput(testConfig)).toThrowError(
      'Config validation error: child "DATABASE_PORT" fails because ["DATABASE_PORT" must be a number]',
      );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('default env should be development', () => {
    const notAllowedFileName = new ConfigService('notallowed.env');
    expect(notAllowedFileName.env).toBe('development');
  });

  it('if file not exist shoul provide defaults', () => {
    const defaultService = new ConfigService('provision.env');
    expect(defaultService.env).toBe('development');
    expect(defaultService.port).toBe(3000);
    expect(defaultService.databaseHost).toBe('localhost');
    expect(defaultService.databasePort).toBe(3306);
  });

  it('port should be 3003', () => {
    expect(service.port).toBe(3003);
  });

  it('databaseHost should be test-local', () => {
    expect(service.databaseHost).toBe('test-local');
  });

  it('databasePort should be test-local', () => {
    expect(service.databasePort).toBe(7777);
  });

  it('databaseUser should be test-local', () => {
    expect(service.databaseUser).toBe('test-bank-crud-demo-account');
  });

  it('databasePassword should be test-local', () => {
    expect(service.databasePassword).toBe('test-bank-crud-demo-password');
  });

  it('databaseName should be test-local', () => {
    expect(service.databaseName).toBe('test-bank-crud-demo-db');
  });

  it('isDevelopment should be False', () => {
    expect(service.isDevelopment).toBe(false);
  });

  it('env should be False', () => {
    expect(service.env).toBe('test');
  });
});
