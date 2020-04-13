import * as React from "react";
import wait from "waait";
import { mount } from "enzyme";
import Spinner from "@material-ui/core/CircularProgress";
import FormWrapper from "./wizard/FormWrapper";
import { accountMock } from "../../helpers/mocks/account/queries/account";
import AccountUpdateForm from "./AccountUpdateForm";
import { RoutePaths } from "../layout/constants";
import { customWrapper } from "../../helpers/customWrapper";
import Error from "../Error";
import { updateAccountMock } from "../../helpers/mocks/account/mutations/updateAccount";
import { getBanksMock } from "../../helpers/mocks/bank/queries/getBanks";
import { getBranchesMock } from "../../helpers/mocks/branch/queries/getBranches";
import { getAccountsMock } from "../../helpers/mocks/account/queries/getAccounts";

describe("AccountUpdateForm component", () => {
  const routeToUpdateAccountOne = RoutePaths.AccountUpdate.replace(":id", "1");
  it("calls the query method on Apollo Client", async () => {
    const wrapper = mount(
      customWrapper(
        <AccountUpdateForm />,
        [...accountMock, ...updateAccountMock],
        routeToUpdateAccountOne,
        RoutePaths.AccountUpdate
      )
    );
    expect(wrapper.find(Spinner).length).toEqual(1);
    await wait(0);
    wrapper.update();
    expect(wrapper.find(Error).length).toEqual(1);
  });

  it("renders without crashing", async () => {
    const wrapper = mount(
      customWrapper(
        <AccountUpdateForm />,
        [
          ...accountMock,
          ...updateAccountMock,
          ...getBanksMock,
          ...getBranchesMock,
          ...accountMock,
          ...getAccountsMock,
        ],
        routeToUpdateAccountOne,
        RoutePaths.AccountUpdate
      )
    );
    expect(wrapper.find(Spinner).length).toEqual(1);
    await wait(0); // wait for response
    wrapper.update();
    expect(wrapper.find(FormWrapper).length).toEqual(1);

    wrapper.find("form").simulate("submit");
    await wait(0); // wait for response
    wrapper.update();

    // expect(wrapper.find(Router).props().history.location.pathname).toBe(RoutePaths.Accounts);
  });
});
