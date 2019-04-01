import React from "react";
import { graphql, ChildDataProps } from "react-apollo";
import { IBank } from "./models";
import { GET_BANKS } from "./queries/getBanks";


type Response = {
    getBanks: IBank[];
};
  
type ChildProps = ChildDataProps<any, Response, any>;

const withBanks = graphql<any, Response, any, ChildProps>(GET_BANKS, {
    /*options: ({ episode }) => ({
      variables: { episode }
    }),
*/  props: ({ data }) => ({ ...data })
});

export default withBanks;