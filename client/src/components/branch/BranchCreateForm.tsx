import * as React from "react";
import Spinner from "@material-ui/core/CircularProgress";
import Error from "../Error";
import { useHistory } from "react-router-dom";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_BRANCH } from "./mutations/createBranch";
import { RoutePaths } from "../layout/constants";
import FormWrapper from "./form/FormWrapper";
import { GET_BRANCHES } from "./queries/getBranches";
import { IBranch } from "./models";

interface MutationResponse {
  craeteBranch: IBranch;
}

const BranchCreateForm: React.FC = () => {
  const history = useHistory();
  const [mutate, { loading, error }] = useMutation<MutationResponse>(
    CREATE_BRANCH,
    {
      onCompleted: (result: MutationResponse) => {
        history.push(RoutePaths.Branches);
      },
      awaitRefetchQueries: true,
      refetchQueries: [{ query: GET_BRANCHES }],
    }
  );

  if (loading) return <Spinner />;
  if (error) return <Error error={error} />;

  return (
    <FormWrapper
      initialValues={{ bankId: 0, name: "", address: "" }}
      mutation={mutate}
    />
  );
};

export default BranchCreateForm;
