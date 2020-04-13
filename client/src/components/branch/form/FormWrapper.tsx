import * as React from 'react';
import { branchFormValidation } from "./validation";
import { branchFormRender } from "./form";
import { Form } from "react-final-form";
import { IBranchFormModel } from "./models";
import { MutationFunction, OperationVariables } from "react-apollo";


interface IFormWrapperProps {
    initialValues: IBranchFormModel;
    mutation: MutationFunction<any, OperationVariables>;
}

const FormWrapper: React.SFC<IFormWrapperProps> = ({initialValues, mutation }) => ( 
    <Form 
        onSubmit={(values) => mutation({ variables: values }).catch(({ graphQLErrors }) => {
            return graphQLErrors && graphQLErrors.length && graphQLErrors[0].extensions.exception.fields;
        })}
        initialValues={initialValues}
        validate={branchFormValidation}
        render={branchFormRender} 
    />
);

export default FormWrapper;