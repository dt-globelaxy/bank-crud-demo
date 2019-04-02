import { ValidationError } from 'class-validator/validation/ValidationError';
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { UserInputError } from 'apollo-server-core';
import { ClassType } from 'class-transformer/ClassTransformer';

export function convertValidationErrorsToFields(validationErrors: ValidationError[]) {
    return validationErrors.reduce((obj, item) => {
        obj[item.property] = item.constraints[Object.keys(item.constraints)[0]];
        return obj;
    }, {});
}

export async function validateDto<T>(type: ClassType<T>, args: T): Promise<T> {
    const updateBankDto = plainToClass(type, args);
    const validationErrors = await validate(updateBankDto);
    if (validationErrors.length > 0) {
        const fields = convertValidationErrorsToFields(validationErrors);
        throw new UserInputError('DTO validation errors', {fields });
    }
    return updateBankDto;
}
