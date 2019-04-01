import * as React from 'react';
import { bankFormValidation } from "./validation";
import { bankFormRender } from "./form";
import { Form } from "react-final-form";
import { IBankFormModel } from "./models";
import { MutationFn } from "react-apollo/Mutation";
import { OperationVariables } from "react-apollo/types";


interface IFormWrapperProps {
    initialValues: IBankFormModel;
    mutation: MutationFn<any, OperationVariables>;
}

const FormWrapper: React.SFC<IFormWrapperProps> = ({initialValues, mutation }) => ( 
    <Form 
        onSubmit={(values) => mutation({ variables: {...values} }).catch((error) => {
            return error.graphQLErrors && error.graphQLErrors.length && error.graphQLErrors[0].extensions.exception.fields;
        })}
        initialValues={initialValues}
        validate={bankFormValidation}
        render={bankFormRender} 
    />
);

export default FormWrapper;