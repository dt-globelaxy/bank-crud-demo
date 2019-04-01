import { FormErrors } from '../../../utils';
import { IAccountFormModel } from './models';


export const accountPageFormValidation = (values: any) => { 
    const errors: FormErrors<IAccountFormModel> = {};
    if (!values.holdersName) {
        errors.holdersName = 'Required';
    } else if (values.holdersName.length > 255) {
        errors.holdersName = 'Shoud be less or equal 255 symbols length';
    } else if (values.holdersName.length < 2) {
        errors.holdersName = 'Shoud be more or equal 2 symbols length';
    }

    if (!values.type) {
        errors.type = 'Required';
    }

    if (!values.number) {
        errors.number = 'Required';
    } else if (values.number.length < 7) {
        errors.number = 'Shoud be 7 digits';
    }
    return errors;
}

export const bankPageFormValidation = (values: any) => { 
    const errors: FormErrors<IAccountFormModel> = {};

    if (!values.bankId) {
        errors.bankId = 'Required';
    } 

    if (!values.branchId) {
        errors.branchId = 'Required';
    }

    return errors;
}


export const employeePageFormValidation = (values: any) => { 
    const errors: FormErrors<IAccountFormModel> = {};
    
    if (!values.employeeName) {
        errors.employeeName = 'Required';
    } else if (values.employeeName.length > 255) {
        errors.employeeName = 'Shoud be less or equal 255 symbols length';
    } else if (values.employeeName.length < 2) {
        errors.employeeName = 'Shoud be more or equal 2 symbols length';
    }

    if (!values.employeeNumber) {
        errors.employeeNumber = 'Required';
    } else if (values.employeeNumber.length < 15) {
        errors.employeeNumber = 'Shoud be 15 digits';
    }

    return errors;
}

export const updateAccountFormValidation = (values: any) => { 
    const val1 = accountPageFormValidation(values);
    const val2 = bankPageFormValidation(values);
    const val3 = employeePageFormValidation(values);
    return {...val1, ...val2, ...val3};
}