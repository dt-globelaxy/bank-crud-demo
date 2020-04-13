import * as React from "react";
import { Mutation } from "react-apollo";
import { CREATE_BANK } from "./mutations/createBank";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { RoutePaths } from "../layout/constants";
import FormWrapper from "./form/FormWrapper";

class BankCreateForm extends React.Component<RouteComponentProps> {
  render() {
    return (
      <Mutation
        mutation={CREATE_BANK}
        onCompleted={(result: any) => {
          this.props.history.push(RoutePaths.Banks);
        }}
        refetchQueries={["getBanks"]}
      >
        {(createBank: any) => (
          <FormWrapper
            initialValues={{ name: "", notes: "" }}
            mutation={createBank}
          />
        )}
      </Mutation>
    );
  }
}

export default withRouter(BankCreateForm);
