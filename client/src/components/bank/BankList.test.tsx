import * as React from "react";
import wait from "waait";
import { getBanksMock } from "../../helpers/mocks/bank/queries/getBanks";
import { mount } from "enzyme";
import Spinner from "@material-ui/core/CircularProgress";
import BankDelete from "./BankDelete";
import BankList from "./BankList";
import Button from "@material-ui/core/Button/Button";
import EnhancedTable from "../table/EnhancedTable";
import { customWrapper } from "../../helpers/customWrapper";
import { RoutePaths } from "../layout/constants";
import { act } from "react-dom/test-utils";

describe("BankList component", () => {
  it("calls the query method on Apollo Client", async () => {
    const wrapper = mount(
      customWrapper(<BankList />, [], RoutePaths.Banks, RoutePaths.Banks)
    );
    expect(wrapper.find(BankDelete).length).toEqual(1);
    expect(wrapper.find(Button).first().html()).toMatch(/Create/);
    expect(wrapper.find(Spinner).length).toEqual(1);
  });

  it("renders without crashing", async () => {
    const wrapper = mount(customWrapper(<BankList />, getBanksMock));
    await wait(0); // wait for response
    wrapper.update();
    expect(wrapper.find(EnhancedTable).length).toEqual(1);
  });
});
