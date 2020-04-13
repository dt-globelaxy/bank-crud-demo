import * as React from "react";
import { Mutation, MutationFunction, OperationVariables } from "react-apollo";
import { DELETE_BRANCH } from "./mutations/deleteBranch";
import { IBranch } from "./models";
import ConfirmDialog from "../dialogs/ConfirmDialog";

interface IBranchListProps {
  openDialog: boolean;
  item: IBranch | undefined;
  closeDialog: Function;
}

class BranchDelete extends React.Component<IBranchListProps> {
  handleDialogClose = () => this.props.closeDialog();
  handleDelete = (
    mutation: MutationFunction<any, OperationVariables>
  ) => () => {
    if (this.props.item && this.props.item.id) {
      mutation({ variables: { id: this.props.item.id } });
    }
    this.props.closeDialog();
  };

  render() {
    return (
      <Mutation
        mutation={DELETE_BRANCH}
        refetchQueries={["getBranches", "branch", "getAccounts", "account"]}
      >
        {(deleteBranch: any) => (
          <ConfirmDialog
            open={this.props.openDialog}
            message={`Do you really want to delete ${
              this.props.item && this.props.item.name
            }?`}
            handleDialogAction={this.handleDelete(deleteBranch)}
            handleDialogClose={this.handleDialogClose}
          />
        )}
      </Mutation>
    );
  }
}

export default BranchDelete;
