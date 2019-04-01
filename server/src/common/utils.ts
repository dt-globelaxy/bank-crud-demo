import { ValidationError } from 'class-validator/validation/ValidationError';

export function convertValidationErrorsToFields(validationErrors: ValidationError[]) {
    return validationErrors.reduce((obj, item) => {
        obj[item.property] = item.constraints[Object.keys(item.constraints)[0]];
        return obj;
    }, {});
}
