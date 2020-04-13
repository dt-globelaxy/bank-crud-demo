import * as React from "react";
import { useMutation } from "react-apollo";
import { DELETE_ACCOUNT } from "./mutations/deleteAccount";
import { IAccount } from "./models";
import ConfirmDialog from "../dialogs/ConfirmDialog";
import { GET_ACCOUNTS, GET_ACCOUNTS_DEFAULTS } from "./queries/getAccounts";

interface IAccountListProps {
  openDialog: boolean;
  item: IAccount | undefined;
  closeDialog: Function;
}

interface MutationResponse {
  deleteAccount: IAccount;
}
const AccountDelete: React.FC<IAccountListProps> = (props) => {
  const [mutation] = useMutation<MutationResponse>(DELETE_ACCOUNT, {
    refetchQueries: [
      {
        query: GET_ACCOUNTS,
        variables: GET_ACCOUNTS_DEFAULTS
      },
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
      message={`Do you really want to delete ${
        props.item && props.item.number
      }?`}
      handleDialogAction={handleDelete}
      handleDialogClose={handleDialogClose}
    />
  );
};

export default AccountDelete;
