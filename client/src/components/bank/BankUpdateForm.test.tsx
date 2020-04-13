import * as React from "react";
import wait from "waait";
import { mount } from "enzyme";
import Spinner from "@material-ui/core/CircularProgress";
import FormWrapper from "./form/FormWrapper";
import BankUpdateForm from "./BankUpdateForm";
import { RoutePaths } from "../layout/constants";
import { customWrapper } from "../../helpers/customWrapper";
import Error from "../Error";
import { bankMock } from "../../helpers/mocks/bank/queries/bank";
import { updateBankMock } from "../../helpers/mocks/bank/mutations/updateBank";
import { getBanksMock } from "../../helpers/mocks/bank/queries/getBanks";

describe("BankUpdateForm component", () => {
  const routeToUpdateBankOne = RoutePaths.BankUpdate.replace(":id", "1");
  it("calls the query method on Apollo Client", async () => {
    const wrapper = mount(
      customWrapper(
        <BankUpdateForm />,
        [],
        routeToUpdateBankOne,
        RoutePaths.BankUpdate
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
        <BankUpdateForm />,
        [...bankMock, ...updateBankMock, ...getBanksMock],
        routeToUpdateBankOne,
        RoutePaths.BankUpdate
      )
    );

    expect(wrapper.find(Spinner).length).toEqual(1);
    await wait(0); // wait for response
    wrapper.update();
    expect(wrapper.find(FormWrapper).length).toEqual(1);

    wrapper.find("form").simulate("submit");
    await wait(0); // wait for response
    wrapper.update();

    // expect(wrapper.find(Router).props().history.location.pathname).toBe(RoutePaths.Banks);
  });
});
