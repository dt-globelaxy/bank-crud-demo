import * as React from 'react';
import { Mutation, Query } from 'react-apollo';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Spinner from '@material-ui/core/CircularProgress'
import Error from '../Error'
import { BANK } from './queries/bank';
import { UPDATE_BANK } from './mutations/updateBank';
import { RoutePaths } from '../layout/constants';
import FormWrapper from './form/FormWrapper';

interface RouteParams {
    id: string | undefined;
}

class BankUpdateForm extends React.Component<RouteComponentProps<RouteParams>> {
    
    render() {
        const id = this.props.match.params.id ? parseInt(this.props.match.params.id) : undefined;
        return (
            <Query query={BANK} variables={{id}}>
                {({ data, error, loading }) => {
                    if (error) {
                        return <Error error={error} />
                    }

                    if (loading || !data) {
                        return <Spinner />
                    }
                    const bank = data.bank;
                    return (
                    <Mutation
                        mutation={UPDATE_BANK}
                        onCompleted={result => { this.props.history.push(RoutePaths.Banks) }}
                        refetchQueries={['getBanks']}
                        >
                        {(updateBank) => (<FormWrapper initialValues={{ id: bank.id, name: bank.name, notes: bank.notes }} mutation={updateBank}  />)}
                    </Mutation>)
                }}
            </Query>
        )
    }
}

export default withRouter(BankUpdateForm)