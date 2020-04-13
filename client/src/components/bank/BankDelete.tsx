
import * as React from 'react';
import { Mutation, MutationFunction, OperationVariables } from 'react-apollo';
import { DELETE_BANK } from './mutations/deleteBank';
import { IBank } from './models';
import ConfirmDialog from '../dialogs/ConfirmDialog';

interface IBankListProps {
    openDialog: boolean;
    item: IBank | undefined
    closeDialog: Function;
}

class BankDelete extends React.Component<IBankListProps> {
    handleDialogClose = () => this.props.closeDialog();
    handleDelete = (mutation: MutationFunction<any, OperationVariables>) => () => {
        if (this.props.item && this.props.item.id) {
            mutation({variables: {id: this.props.item.id}});
        }
        this.props.closeDialog();
    }
    
    render() {
        return (
            <Mutation mutation={DELETE_BANK} refetchQueries={['getBanks','bank', 'getBranches', 'branch', 'getAccounts', 'account']}>
                {(deleteBank: any) => (
                <ConfirmDialog open={this.props.openDialog} message={`Do you really want to delete ${this.props.item && this.props.item.name}?`} 
                    handleDialogAction={this.handleDelete(deleteBank)}
                    handleDialogClose={this.handleDialogClose}
                />)}
            </Mutation>
        )
    }
}

export default BankDelete;