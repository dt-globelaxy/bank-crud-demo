import * as React from "react";
import { updateAccountFormValidation } from "./validation";
import { updateFormRender } from "./form";
import { Form } from "react-final-form";
import { IAccountFormModel } from "./models";
import { MutationFunction, OperationVariables } from "react-apollo";

interface IFormWrapperProps {
  initialValues?: IAccountFormModel;
  mutation: MutationFunction<any, OperationVariables>;
}

const FormWrapper: React.FC<IFormWrapperProps> = ({
  initialValues,
  mutation,
}) => (
  <Form
    onSubmit={async (values: IAccountFormModel) => {
      try {
        return mutation({
          variables: { ...values, employeeNumber: values.employeeNumber.toString() },
        });
      } catch (error) {
        return (
          error.graphQLErrors &&
          error.graphQLErrors.length &&
          error.graphQLErrors[0].extensions.exception.fields
        );
      }
    }}
    initialValues={initialValues}
    validate={updateAccountFormValidation}
    render={updateFormRender}
  />
);

export default FormWrapper;
