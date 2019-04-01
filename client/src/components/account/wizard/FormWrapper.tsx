import * as React from 'react';
import { updateAccountFormValidation } from "./validation";
import { updateFormRender } from "./form";
import { Form } from "react-final-form";
import { IAccountFormModel } from "./models";
import { MutationFn } from "react-apollo/Mutation";
import { OperationVariables } from "react-apollo/types";


interface IFormWrapperProps {
    initialValues?: IAccountFormModel;
    mutation: MutationFn<any, OperationVariables>;
}

const FormWrapper: React.SFC<IFormWrapperProps> = ({initialValues, mutation }) => ( 
    <Form 
        onSubmit={(values: any) =>  {
            values.number = parseInt(values.number);
            return mutation({ variables: values }).catch((error) => {
                return error.graphQLErrors && error.graphQLErrors.length && error.graphQLErrors[0].extensions.exception.fields;
        })}}
        initialValues={initialValues}
        validate={updateAccountFormValidation}
        render={updateFormRender} 
    />
);

export default FormWrapper;