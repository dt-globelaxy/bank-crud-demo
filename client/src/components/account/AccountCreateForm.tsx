import * as React from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_ACCOUNT } from './mutations/createAccount';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { RoutePaths } from '../layout/constants';
import WizardForm from './wizard/WizardForm';
import Spinner from '@material-ui/core/CircularProgress'
import Error from '../Error'

class AccountCreateForm extends React.Component<RouteComponentProps> {
    render() {
        return (
            <Mutation
                mutation={CREATE_ACCOUNT}
                onCompleted={result => {this.props.history.push(RoutePaths.Accounts) }}
                refetchQueries={['getAccounts', 'account']}
                >
                {(createAccount, { loading, error }) => { 
                    if (loading) { return <Spinner /> }
                    if (error) {return <Error error={error} /> }
                    return (<WizardForm mutation={createAccount}/>)
                }}
            </Mutation>
        )
    }
}

export default withRouter(AccountCreateForm)