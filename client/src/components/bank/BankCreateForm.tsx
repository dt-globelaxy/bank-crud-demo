import * as React from "react";
import Spinner from "@material-ui/core/CircularProgress";
import Error from "../Error";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { RoutePaths } from "../layout/constants";
import FormWrapper from "./form/FormWrapper";
import { IBank } from "./models";
import { CREATE_BANK } from "./mutations/createBank";
import { GET_BANKS } from "./queries/getBanks";

interface MutationResponse {
  craeteBank: IBank;
}

const BankCreateForm: React.FC = () => {
  const history = useHistory();
  const [mutate, { loading, error }] = useMutation<MutationResponse>(
    CREATE_BANK,
    {
      onCompleted: (result: MutationResponse) => {
        history.push(RoutePaths.Banks);
      },
      awaitRefetchQueries: true,
      refetchQueries: [{ query: GET_BANKS }],
    }
  );

  if (loading) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <FormWrapper initialValues={{ name: "", notes: "" }} mutation={mutate} />
  );
};

export default BankCreateForm;
