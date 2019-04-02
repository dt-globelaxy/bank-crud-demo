import * as React from 'react';
import wait from 'waait';
import { mount } from 'enzyme';
import Spinner from '@material-ui/core/CircularProgress'
import FormWrapper from './wizard/FormWrapper';
import { accountMock } from '../../helpers/mocks/account/queries/account';
import AccountCreateForm from './AccountCreateForm';
import { RoutePaths } from '../layout/constants';
import { customWrapper } from '../../helpers/customWrapper';
import Error from '../Error'
import Wizard from './wizard/Wizard';
import WizardForm from './wizard/WizardForm';
import { getBanksMock } from '../../helpers/mocks/bank/queries/getBanks';
import { getBankBranchesMock } from '../../helpers/mocks/branch/queries/getBankBranches';
import Select from 'react-select/lib/Select';
import Button from '@material-ui/core/Button/Button';
import { bankMock } from '../../helpers/mocks/bank/queries/bank';
import { branchMock } from '../../helpers/mocks/branch/queries/branch';
import { Router, MemoryRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { createAccountMock } from '../../helpers/mocks/account/mutations/deleteAccount';
import { getAccountsMock } from '../../helpers/mocks/account/queries/getAccounts';

describe('AccountCreateForm component', () => {

    it('renders wizard', async () => {
        const wrapper = mount(
            customWrapper(<AccountCreateForm />,
                [...accountMock, ...getBanksMock, ...getBankBranchesMock, ...bankMock, ...branchMock, ...createAccountMock, ...getAccountsMock ], 
                RoutePaths.AccountCreate, RoutePaths.AccountCreate)
        );
        expect(wrapper.find(WizardForm).length).toEqual(1);

        await wait(0); // wait for response
        wrapper.update();
        const bankId = wrapper.find(Select).first();
        (bankId.instance() as any).selectOption({label: 'Test BANK', value: 1});

        await wait(0); // wait for response
        wrapper.update();

        const branchId = wrapper.find(Select).last();
        (branchId.instance() as any).selectOption({label: 'Test Branch', value: 1});

        wrapper.find('form').simulate('submit');
        await wait(0); // wait for response
        wrapper.update();

        expect(wrapper.find(Button).first().html()).toMatch(/Previous/);

        const holdersName = wrapper.find('input[name="holdersName"]');
        (holdersName.instance() as any).value = "Test Holders Name";
        holdersName.simulate('change', holdersName);

        const type = wrapper.find(Select).last();
        (type.instance() as any).selectOption({label: 'Savings', value: 'Savings'});

        const number = wrapper.find('input[name="number"]');
        (number.instance() as any).value = 7777777;
        number.simulate('change', number);

        wrapper.find('form').simulate('submit');
        await wait(0); // wait for response
        wrapper.update();

        const employeeName = wrapper.find('input[name="employeeName"]');
        (employeeName.instance() as any).value = "Test Employee Name";
        employeeName.simulate('change', employeeName);

        const employeeNumber = wrapper.find('input[name="employeeNumber"]');
        (employeeNumber.instance() as any).value = 555555555555555;
        employeeNumber.simulate('change', number);

        wrapper.find('form').simulate('submit');
        await wait(0); // wait for response
        wrapper.update();

        //console.log(wrapper.debug());
        //console.log(wrapper.find(MemoryRouter).instance().history);
    });

    it('calls mutation with values', async () => {
        const wrapper = mount(
            customWrapper(<AccountCreateForm />, accountMock, RoutePaths.AccountCreate, RoutePaths.AccountCreate)
        );
    });
});