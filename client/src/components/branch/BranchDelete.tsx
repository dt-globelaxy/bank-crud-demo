import * as React from "react";
import { useMutation } from "react-apollo";
import { DELETE_BRANCH } from "./mutations/deleteBranch";
import { IBranch } from "./models";
import ConfirmDialog from "../dialogs/ConfirmDialog";
import { GET_BRANCHES } from "./queries/getBranches";
import { GET_ACCOUNTS } from "../account/queries/getAccounts";

interface IBranchListProps {
  openDialog: boolean;
  item: IBranch | undefined;
  closeDialog: Function;
}

interface MutationResponse {
  deleteBranch: IBranch;
}

const BranchDelete: React.FC<IBranchListProps> = (props) => {
  const [mutation] = useMutation<MutationResponse>(DELETE_BRANCH, {
    refetchQueries: [{ query: GET_BRANCHES }, { query: GET_ACCOUNTS }],
    awaitRefetchQueries: true,
  });
  const handleDialogClose = () => props.closeDialog();
  const handleDelete = () => {
    if (props.item && props.item.id) {
      mutation({ variables: { id: props.item.id } });
    }
    props.closeDialog();
  };

  return (
    <ConfirmDialog
      open={props.openDialog}
      message={`Do you really want to delete ${props.item && props.item.name}?`}
      handleDialogAction={handleDelete}
      handleDialogClose={handleDialogClose}
    />
  );
};

export default BranchDelete;
