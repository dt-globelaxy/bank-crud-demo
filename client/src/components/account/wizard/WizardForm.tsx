import * as React from 'react';
import Wizard from './Wizard';
import { BankPage } from './pages/BankPage';
import { Mutation, MutationFn, OperationVariables } from 'react-apollo';
import { CREATE_ACCOUNT } from '../mutations/createAccount';
import { RoutePaths } from '../../layout/constants';
import { AccountPage } from './pages/AccountPage';
import { EmployeePage } from './pages/EmployeePage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import Paper from '@material-ui/core/Paper/Paper';
import { bankPageFormValidation, accountPageFormValidation, employeePageFormValidation } from './validation';

interface IWizardFormProps {
    mutation: MutationFn<any, OperationVariables>;
}

export default class WizardForm extends React.Component<IWizardFormProps> {
    render() {
        return (
            <Paper style={{ padding: 16 }}>
                <Wizard mutation={this.props.mutation}>
                    <Wizard.Page label="Bank" validate={bankPageFormValidation}>
                        <BankPage />
                    </Wizard.Page>
                    <Wizard.Page label="Account" validate={accountPageFormValidation}>
                        <AccountPage />
                    </Wizard.Page>
                    <Wizard.Page label="Employee" validate={employeePageFormValidation}>
                        <EmployeePage />
                    </Wizard.Page>
                    <Wizard.Page label="Confirmation">
                        <ConfirmationPage />
                    </Wizard.Page>
                </Wizard>
            </Paper>)
    }
}