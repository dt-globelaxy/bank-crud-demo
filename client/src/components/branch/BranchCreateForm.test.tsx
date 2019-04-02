import * as React from 'react';
import wait from 'waait';
import { mount } from 'enzyme';
import { RoutePaths } from '../layout/constants';
import { customWrapper } from '../../helpers/customWrapper';
import { Router } from 'react-router-dom';
import BranchCreateForm from './BranchCreateForm';
import Button from '@material-ui/core/Button/Button';
import { getBanksMock } from '../../helpers/mocks/bank/queries/getBanks';
import Select from 'react-select/lib/Select';
import { createBranchMock } from '../../helpers/mocks/branch/mutations/createBranch';

describe('BranchCreateForm component', async () => {

    it('renders form', async () => {
        const wrapper = mount(
            customWrapper(<BranchCreateForm />,
                [...createBranchMock, ...getBanksMock ], 
                RoutePaths.BranchCreate, RoutePaths.BranchCreate)
        );
        await wait(5); // wait for response
        wrapper.update();
        expect(wrapper.find(Button).length).toEqual(1);

        const bankId = wrapper.find(Select).first();
        (bankId.instance() as any).selectOption({label: 'Test BANK', value: 1});

        const name = wrapper.find('input[name="name"]');
        (name.instance() as any).value = 'Test Branch';
        name.simulate('change', name);

        const address = wrapper.find('input[name="address"]');
        (address.instance() as any).value = 'test';
        address.simulate('change', address);

        wrapper.find('form').simulate('submit');
        await wait(1); // wait for response
        wrapper.update();

        // expect(wrapper.find(Router).props().history.location.pathname).toBe(RoutePaths.Branches);
    });

});