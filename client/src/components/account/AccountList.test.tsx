import * as React from "react";
import wait from "waait";
import { MockedProvider } from "@apollo/react-testing";
import { getAccountsMock } from "../../helpers/mocks/account/queries/getAccounts";
import { mount } from "enzyme";
import Spinner from "@material-ui/core/CircularProgress";
import AccountDelete from "./AccountDelete";
import AccountListFilters from "./AccountListFilters";
import AccountList from "./AccountList";
import Button from "@material-ui/core/Button/Button";
import EnhancedTable from "../table/EnhancedTable";
import { customWrapper } from "../../helpers/customWrapper";

describe("AccountList component", () => {
  it("calls the query method on Apollo Client", async () => {
    const wrapper = mount(
      <MockedProvider mocks={[]} addTypename={false}>
        <AccountList />
      </MockedProvider>
    );
    expect(wrapper.find(AccountDelete).length).toEqual(1);
    expect(wrapper.find(AccountListFilters).length).toEqual(1);
    expect(wrapper.find(Button).first().html()).toMatch(/Create/);
    expect(wrapper.find(Spinner).length).toEqual(1);
  });

  it("renders without crashing", async () => {
    const wrapper = mount(customWrapper(<AccountList />, getAccountsMock));

    await wait(0); // wait for response
    wrapper.update();
    expect(wrapper.find(EnhancedTable).length).toEqual(1);
  });
});
