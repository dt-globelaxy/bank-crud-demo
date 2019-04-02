import * as React from 'react';
import wait from 'waait';
import { mount } from 'enzyme';
import { RoutePaths } from '../layout/constants';
import { customWrapper } from '../../helpers/customWrapper';
import { MemoryRouter, Router } from 'react-router-dom';
import { createBankMock } from '../../helpers/mocks/bank/mutations/createBank';
import BankCreateForm from './BankCreateForm';
import Button from '@material-ui/core/Button/Button';
import { getBanksMock } from '../../helpers/mocks/bank/queries/getBanks';

describe('BankCreateForm component', async () => {

    it('renders form', async () => {
        const wrapper = mount(
            customWrapper(<BankCreateForm />,
                [...createBankMock, ...getBanksMock ], 
                RoutePaths.BankCreate, RoutePaths.BankCreate)
        );
        expect(wrapper.find(Button).length).toEqual(1);

        const name = wrapper.find('input[name="name"]');
        (name.instance() as any).value = 'Test BANK';
        name.simulate('change', name);

        const notes = wrapper.find('textarea[name="notes"]');
        (notes.instance() as any).value = 'test';
        notes.simulate('change', notes);

        wrapper.find('form').simulate('submit');
        await wait(1); // wait for response
        wrapper.update();

        //expect(wrapper.find(Router).props().history.location.pathname).toBe(RoutePaths.Banks);
    });

});