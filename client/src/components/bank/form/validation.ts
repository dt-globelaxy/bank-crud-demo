import { FormErrors } from '../../../utils';
import { IBankFormModel } from './models';


export const bankFormValidation = (values: any) => { 
    const errors: FormErrors<IBankFormModel> = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 255) {
        errors.name = 'Shoud be less or equal 255 symbols length';
    } else if (values.name.length < 3) {
        errors.name = 'Shoud be more or equal 3 symbols length';
    }
    return errors;
}