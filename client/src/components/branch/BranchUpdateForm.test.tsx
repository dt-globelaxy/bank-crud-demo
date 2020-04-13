import * as React from "react";
import wait from "waait";
import { mount } from "enzyme";
import Spinner from "@material-ui/core/CircularProgress";
import FormWrapper from "./form/FormWrapper";
import { RoutePaths } from "../layout/constants";
import { customWrapper } from "../../helpers/customWrapper";
import Error from "../Error";
import { getBanksMock } from "../../helpers/mocks/bank/queries/getBanks";
import { branchMock } from "../../helpers/mocks/branch/queries/branch";
import { updateBranchMock } from "../../helpers/mocks/branch/mutations/updateBranch";
import BranchUpdateForm from "./BranchUpdateForm";
import { act } from "react-test-renderer";

describe("BranchUpdateForm component", () => {
  const routeToUpdateBranchOne = RoutePaths.BranchUpdate.replace(":id", "1");
  it("calls the query method on Apollo Client", async () => {
    const wrapper = mount(
      customWrapper(
        <BranchUpdateForm />,
        [...branchMock],
        routeToUpdateBranchOne,
        RoutePaths.BranchUpdate
      )
    );
    expect(wrapper.find(Spinner).length).toEqual(1);
    await wait(1);
    wrapper.update();
    expect(wrapper.find(Error).length).toEqual(1);
  });

  it("renders without crashing", async () => {
    const wrapper = mount(
      customWrapper(
        <BranchUpdateForm />,
        [...getBanksMock, ...branchMock, ...updateBranchMock],
        routeToUpdateBranchOne,
        RoutePaths.BranchUpdate
      )
    );
    expect(wrapper.find(Spinner).length).toEqual(1);
    await wait(0); // wait for response
    wrapper.update();
    expect(wrapper.find(FormWrapper).length).toEqual(1);

    wrapper.find("form").simulate("submit");
    await wait(1); // wait for response
    wrapper.update();
    //console.log(wrapper.debug());
    // expect(wrapper.find(Router).props().history.location.pathname).toBe(RoutePaths.Branches);
  });
});
