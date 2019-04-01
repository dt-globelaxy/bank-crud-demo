import { FormErrors } from '../../../utils';
import { IBranchFormModel } from './models';


export const branchFormValidation = (values: any) => { 
    const errors: FormErrors<IBranchFormModel> = {};
    if (!values.bankId) {
        errors.bankId = 'Required';
    } 
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 255) {
        errors.name = 'Shoud be less or equal 255 symbols length';
    } else if (values.name.length < 3) {
        errors.name = 'Shoud be more or equal 3 symbols length';
    }
    return errors;
}