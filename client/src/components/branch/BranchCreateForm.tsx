import * as React from 'react';
import { Mutation } from 'react-apollo';
import { CREATE_BRANCH } from './mutations/createBranch';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { RoutePaths } from '../layout/constants';
import FormWrapper from './form/FormWrapper';

class BranchCreateForm extends React.Component<RouteComponentProps> {
    
    render() {
        return (
            <Mutation
                mutation={CREATE_BRANCH}
                onCompleted={result => {this.props.history.push(RoutePaths.Branches) }}
                refetchQueries={['getBranches', 'getBankBranches']}
                >
                {(createBranch) => (<FormWrapper initialValues={{ bankId: 0, name: '', address: ''}} mutation={createBranch}  />)}
            </Mutation>
        )
    }
}

export default withRouter(BranchCreateForm)