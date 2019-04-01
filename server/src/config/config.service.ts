import * as dotenv from 'dotenv';
import * as Joi from 'joi';
import * as fs from 'fs';

import {Injectable} from '@nestjs/common';

export interface EnvConfig {
    [key: string]: string;
}

@Injectable()
export class ConfigService {
    private readonly envConfig: EnvConfig;

    constructor(filePath: string) {
        if (['development.env', 'production.env', 'test.env', 'provision.env'].indexOf(filePath.toLowerCase()) < 0) {
            filePath = 'development.env';
        }
        const config = fs.existsSync(filePath) ? dotenv.parse(fs.readFileSync(filePath)) : dotenv.parse('');
        this.envConfig = this.validateInput(config);
    }

    /**
     * Ensures all needed variables are set, and returns the validated JavaScript object
     * including the applied default values.
     */
    public validateInput(envConfig: EnvConfig): EnvConfig {
        const envVarsSchema: Joi.ObjectSchema = Joi.object({
            NODE_ENV: Joi.string().valid(['development', 'production', 'test', 'provision']).default('development'),
            PORT: Joi.number().default(3000),
            DATABASE_HOST: Joi.string().default('localhost'),
            DATABASE_PORT: Joi.number().default(3306),
            DATABASE_NAME: Joi.string().default('bank-crud-demo-db'),
            DATABASE_USER: Joi.string().default('root'),
            DATABASE_PASSWORD: Joi.string().default(''),
        });
        const {error, value: validatedEnvConfig} = Joi.validate(envConfig, envVarsSchema);
        if (error) {
            throw new Error(`Config validation error: ${error.message}`);
        }
        return validatedEnvConfig;
    }

    get env(): string {
        return this.envConfig.NODE_ENV;
    }

    get isDevelopment(): boolean {
        return this.envConfig.NODE_ENV === 'development';
    }

    get port(): number {
        return Number(this.envConfig.PORT);
    }

    get databaseHost(): string {
        return this.envConfig.DATABASE_HOST;
    }

    get databasePort(): number {
        return Number(this.envConfig.DATABASE_PORT);
    }

    get databaseName(): string {
        return this.envConfig.DATABASE_NAME;
    }

    get databaseUser(): string {
        return this.envConfig.DATABASE_USER;
    }

    get databasePassword(): string {
        return this.envConfig.DATABASE_PASSWORD;
    }
}
