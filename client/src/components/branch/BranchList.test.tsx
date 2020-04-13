import * as React from "react";
import wait from "waait";
import { mount } from "enzyme";
import Spinner from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button/Button";
import EnhancedTable from "../table/EnhancedTable";
import { customWrapper } from "../../helpers/customWrapper";
import { RoutePaths } from "../layout/constants";
import BranchList from "./BranchList";
import { getBranchesMock } from "../../helpers/mocks/branch/queries/getBranches";
import BranchDelete from "./BranchDelete";
import { act } from "react-test-renderer";

describe("BranchList component", () => {
  it("calls the query method on Apollo Client", async () => {
    const wrapper = mount(
      customWrapper(
        <BranchList />,
        [],
        RoutePaths.Branches,
        RoutePaths.Branches
      )
    );

    expect(wrapper.find(BranchDelete).length).toEqual(1);
    expect(wrapper.find(Button).first().html()).toMatch(/Create/);
    expect(wrapper.find(Spinner).length).toEqual(1);
  });

  it("renders without crashing", async () => {
    const wrapper = mount(
      customWrapper(
        <BranchList />,
        getBranchesMock,
        RoutePaths.Branches,
        RoutePaths.Branches
      )
    );

    await wait(0); // wait for response
    wrapper.update();
    expect(wrapper.find(EnhancedTable).length).toEqual(1);
  });
});
