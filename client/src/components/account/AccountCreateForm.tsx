import * as React from "react";
import { CREATE_ACCOUNT } from "./mutations/createAccount";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { RoutePaths } from "../layout/constants";
import WizardForm from "./wizard/WizardForm";
import Spinner from "@material-ui/core/CircularProgress";
import Error from "../Error";
import { GET_ACCOUNTS, GET_ACCOUNTS_DEFAULTS } from "./queries/getAccounts";
import { IAccount } from "./models";

interface MutationResponse {
  craeteAccount: IAccount;
}

const AccountCreateForm: React.FC = () => {
  const history = useHistory();
  const [mutate, { loading, error }] = useMutation<MutationResponse>(
    CREATE_ACCOUNT,
    {
      onCompleted: (result: MutationResponse) => {
        history.push(RoutePaths.Accounts);
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: GET_ACCOUNTS,
          variables: GET_ACCOUNTS_DEFAULTS,
        },
      ],
    }
  );

  if (loading) return <Spinner />;
  if (error) return <Error error={error} />;

  return <WizardForm mutation={mutate} />;
};

export default AccountCreateForm;
