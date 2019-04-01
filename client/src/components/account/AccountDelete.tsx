
import * as React from 'react';
import { Mutation, MutationFn, OperationVariables } from 'react-apollo';
import { DELETE_ACCOUNT } from './mutations/deleteAccount';
import { IAccount } from './models';
import ConfirmDialog from '../dialogs/ConfirmDialog';

interface IAccountListProps {
    openDialog: boolean;
    item: IAccount | undefined
    closeDialog: Function;
}

class AccountDelete extends React.Component<IAccountListProps> {
    handleDialogClose = () => this.props.closeDialog();
    handleDelete = (mutation: MutationFn<any, OperationVariables>) => () => {
        if (this.props.item && this.props.item.id) {
            mutation({variables: {id: this.props.item.id}});
        }
        this.props.closeDialog();
    }
    
    render() {
        return (
            <Mutation mutation={DELETE_ACCOUNT} refetchQueries={['getAccounts', 'account']}>
                {(deleteAccount) => (
                <ConfirmDialog open={this.props.openDialog} message={`Do you really want to delete ${this.props.item && this.props.item.number}?`} 
                    handleDialogAction={this.handleDelete(deleteAccount)}
                    handleDialogClose={this.handleDialogClose}
                />)}
            </Mutation>
        )
    }
}

export default AccountDelete;