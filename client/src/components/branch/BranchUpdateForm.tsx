import * as React from 'react';
import { Mutation, Query } from 'react-apollo';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import Spinner from '@material-ui/core/CircularProgress'
import Error from '../Error'
import { BRANCH } from './queries/branch';
import { UPDATE_BRANCH } from './mutations/updateBranch';
import { RoutePaths } from '../layout/constants';
import FormWrapper from './form/FormWrapper';

interface RouteParams {
    id: string | undefined;
}

class BranchUpdateForm extends React.Component<RouteComponentProps<RouteParams>> {
    
    render() {
        const id = this.props.match.params.id ? parseInt(this.props.match.params.id) : undefined;
        return (
            <Query query={BRANCH} variables={{id}}>
                {({ data, error, loading }) => {
                    if (error) { return <Error error={error} /> }
                    if (loading || !data) { return <Spinner /> }
                    const {created, updated, bank, ...branchData} = data.branch;
                    return (
                    <Mutation
                        mutation={UPDATE_BRANCH}
                        onCompleted={result => { this.props.history.push(RoutePaths.Branches) }}
                        refetchQueries={['getBranches', 'getBankBranches']}
                        >
                        {(updateBranch) => (<FormWrapper initialValues={branchData} mutation={updateBranch}  />)}
                    </Mutation>)
                }}
            </Query>
        )
    }
}

export default withRouter(BranchUpdateForm)