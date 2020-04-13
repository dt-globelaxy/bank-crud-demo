import * as React from "react";
import { MockedProvider, MockedResponse } from "@apollo/react-testing";
import { MemoryRouter, Route } from "react-router-dom";
import { RoutePaths } from "../components/layout/constants";

export const customWrapper = (
  node: any | null,
  mocks?: MockedResponse[],
  route: string = "/accounts",
  path: RoutePaths = RoutePaths.Accounts
) => {
  return (
    <MockedProvider
      defaultOptions={{ query: { fetchPolicy: "no-cache" } }}
      mocks={mocks}
      addTypename={false}
    >
      <MemoryRouter initialEntries={[route]}>
        <Route
          component={(props: any) => React.cloneElement(node, props)}
          path={path}
        />
      </MemoryRouter>
    </MockedProvider>
  );
};
