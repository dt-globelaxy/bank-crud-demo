import * as React from "react";
import { useQuery, useMutation } from "react-apollo";
import { useParams, useHistory } from "react-router-dom";
import Spinner from "@material-ui/core/CircularProgress";
import Error from "../Error";
import { ACCOUNT } from "./queries/account";
import { UPDATE_ACCOUNT } from "./mutations/updateAccount";
import { RoutePaths } from "../layout/constants";
import FormWrapper from "./wizard/FormWrapper";
import { GET_ACCOUNTS, GET_ACCOUNTS_DEFAULTS } from "./queries/getAccounts";
import { IAccount } from "./models";

interface RouteParams {
  id: string | undefined;
}

interface QueryResponse {
  account: IAccount;
}

interface MutationResponse {
  updateAccount: IAccount;
}

const AccountUpdateForm: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const { loading, error, data } = useQuery<QueryResponse>(ACCOUNT, {
    variables: { id },
  });
  const [mutation] = useMutation<MutationResponse>(UPDATE_ACCOUNT, {
    onCompleted: (result: MutationResponse) => {
      history.push(RoutePaths.Accounts);
    },
    refetchQueries: [
      {
        query: GET_ACCOUNTS,
        variables: GET_ACCOUNTS_DEFAULTS,
      },
    ],
    awaitRefetchQueries: true,
  });

  if (loading || !data) return <Spinner />;
  if (error) return <Error error={error} />;

  const { created, updated, ...accountData } = data.account;

  return <FormWrapper initialValues={accountData} mutation={mutation} />;
};

export default AccountUpdateForm;
