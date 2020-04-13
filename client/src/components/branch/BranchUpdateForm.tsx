import * as React from "react";
import { useQuery, useMutation } from "react-apollo";
import { useParams, useHistory } from "react-router-dom";
import Spinner from "@material-ui/core/CircularProgress";
import Error from "../Error";
import { BRANCH } from "./queries/branch";
import { UPDATE_BRANCH } from "./mutations/updateBranch";
import { RoutePaths } from "../layout/constants";
import FormWrapper from "./form/FormWrapper";
import { GET_BRANCHES } from "./queries/getBranches";
import { IBranch } from "./models";

interface RouteParams {
  id: string | undefined;
}

interface QueryResponse {
  branch: IBranch;
}

interface MutationResponse {
  updateBranch: IBranch;
}

const BranchUpdateForm: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<RouteParams>();
  const { loading, error, data } = useQuery<QueryResponse>(BRANCH, {
    variables: { id },
  });
  const [mutation] = useMutation<MutationResponse>(UPDATE_BRANCH, {
    onCompleted: (result: MutationResponse) => {
      history.push(RoutePaths.Branches);
    },
    refetchQueries: [{ query: GET_BRANCHES }],
    awaitRefetchQueries: true,
  });

  if (loading || !data) return <Spinner />;
  if (error) return <Error error={error} />;

  const { created, updated, bank, ...branchData } = data.branch;
  return <FormWrapper initialValues={branchData} mutation={mutation} />;
};

export default BranchUpdateForm;
