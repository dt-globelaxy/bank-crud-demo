import * as React from 'react';
import { Mutation, Query } from 'react-apollo';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Spinner from '@material-ui/core/CircularProgress'
import Error from '../Error'
import { ACCOUNT } from './queries/account';
import { UPDATE_ACCOUNT } from './mutations/updateAccount';
import { RoutePaths } from '../layout/constants';
import FormWrapper from './wizard/FormWrapper';

interface RouteParams {
    id: string | undefined;
}

class AccountUpdateForm extends React.Component<RouteComponentProps<RouteParams>> {
    
    render() {
        const id = this.props.match.params.id ? parseInt(this.props.match.params.id) : undefined;
        return (
            <Query query={ACCOUNT} variables={{id}}>
                {({ data, error, loading }) => {
                    if (error) { return <Error error={error} /> }
                    if (loading || !data) {  return <Spinner /> }
                    const { created, updated, branch, bank ,...accountData } = data.account;
                    return (
                    <Mutation
                        mutation={UPDATE_ACCOUNT}
                        onCompleted={result => { this.props.history.push(RoutePaths.Accounts) }}
                        refetchQueries={['getAccounts', 'account']}
                        >
                        {(updateAccount) => (<FormWrapper initialValues={accountData} mutation={updateAccount}  />)}
                    </Mutation>)
                }}
            </Query>
        )
    }
}

export default withRouter(AccountUpdateForm)