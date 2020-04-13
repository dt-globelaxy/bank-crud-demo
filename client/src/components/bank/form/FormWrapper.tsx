import * as React from 'react';
import { bankFormValidation } from "./validation";
import { bankFormRender } from "./form";
import { Form } from "react-final-form";
import { IBankFormModel } from "./models";
import { MutationFunction, OperationVariables } from "react-apollo";


interface IFormWrapperProps {
    initialValues: IBankFormModel;
    mutation: MutationFunction<any, OperationVariables>;
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