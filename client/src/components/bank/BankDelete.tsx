import * as React from "react";
import { useMutation } from "react-apollo";
import { DELETE_BANK } from "./mutations/deleteBank";
import { IBank } from "./models";
import ConfirmDialog from "../dialogs/ConfirmDialog";
import { GET_BANKS } from "./queries/getBanks";
import { GET_BRANCHES } from "../branch/queries/getBranches";
import { GET_ACCOUNTS } from "../account/queries/getAccounts";

interface IBankListProps {
  openDialog: boolean;
  item: IBank | undefined;
  closeDialog: Function;
}

interface MutationResponse {
  deleteBank: IBank;
}

const BankDelete: React.FC<IBankListProps> = (props) => {
  const [mutation] = useMutation<MutationResponse>(DELETE_BANK, {
    refetchQueries: [
      { query: GET_BANKS },
      { query: GET_BRANCHES },
      { query: GET_ACCOUNTS },
    ],
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

export default BankDelete;
