import * as React from "react";
import { MockedProvider, MockedResponse } from "@apollo/react-testing";
import { Router, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import { createShallow } from "@material-ui/core/test-utils";

export const customShallow = (
  node: JSX.Element | null,
  mocks?: MockedResponse[],
  {
    route = "/",
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) => {
  return {
    history,
    ...createShallow()(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Router history={history}>
          <Switch>{node}</Switch>
        </Router>
      </MockedProvider>
    ),
  };
};
