import * as React from "react";
import { useQuery, useMutation } from "react-apollo";
import { useParams, useHistory } from "react-router-dom";
import Spinner from "@material-ui/core/CircularProgress";
import Error from "../Error";
import { BANK } from "./queries/bank";
import { UPDATE_BANK } from "./mutations/updateBank";
import { RoutePaths } from "../layout/constants";
import FormWrapper from "./form/FormWrapper";
import { GET_BANKS } from "./queries/getBanks";
import { IBank } from "./models";

interface RouteParams {
  id: string | undefined;
}

interface QueryResponse {
  bank: IBank;
}

interface MutationResponse {
    updateBank: IBank;
}

const BankUpdateForm: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const { loading, error, data } = useQuery<QueryResponse>(BANK, {
    variables: { id },
  });
  const [mutation] = useMutation<MutationResponse>(UPDATE_BANK, {
    onCompleted: (result: MutationResponse) => {
      history.push(RoutePaths.Banks);
    },
    refetchQueries: [{ query: GET_BANKS }],
    awaitRefetchQueries: true,
  });

  if (loading || !data) return <Spinner />;
  if (error) return <Error error={error} />;

  const bank = data.bank;

  return (
    <FormWrapper
      initialValues={{
        id: bank.id,
        name: bank.name,
        notes: bank.notes,
      }}
      mutation={mutation}
    />
  );
};

export default BankUpdateForm;
