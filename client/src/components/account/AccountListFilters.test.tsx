import * as React from 'react';
import { mount, shallow } from 'enzyme';
import AccountListFilters from './AccountListFilters';
import { RoutePaths } from '../layout/constants';
import { Form } from 'react-final-form';
import Button from '@material-ui/core/Button/Button';

describe('AccountListFilters component', () => {
    it('renders without crashing', () => {
        const mochHandleOnFilterChange = jest.fn();
        const wrapper = shallow(
            <AccountListFilters 
                fromNumber={undefined} 
                toNumber={undefined} 
                onFilterChange={mochHandleOnFilterChange} 
            />
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('renders without errors and triggers onFilterChange', async () => {
        const mochHandleOnFilterChange = jest.fn();
        const wrapper = mount(
            <AccountListFilters 
                fromNumber={undefined} 
                toNumber={undefined} 
                onFilterChange={mochHandleOnFilterChange} 
            />
        );
        expect(wrapper.find(Form).length).toEqual(1);
        wrapper.find(Button).first().simulate('click');
        expect(mochHandleOnFilterChange.mock.calls.length).toEqual(1);
        wrapper.find(Button).last().simulate('click');
        expect(mochHandleOnFilterChange.mock.calls.length).toEqual(1);
    });

    it('sends form values on trigger onFilterChange', () => {
        const mochHandleOnFilterChange = jest.fn();
        const wrapper = mount(
            <AccountListFilters 
                fromNumber={undefined} 
                toNumber={undefined} 
                onFilterChange={mochHandleOnFilterChange} 
            />
        );

        const fromNumber = wrapper.find('input[name="fromNumber"]');
        (fromNumber.instance() as any).value = '55';
        fromNumber.simulate('change', fromNumber);

        const toNumber = wrapper.find('input[name="toNumber"]');
        (toNumber.instance() as any).value = '75';
        toNumber.simulate('change', toNumber);

        wrapper.find('form').simulate('submit');
        expect(mochHandleOnFilterChange.mock.calls.length).toEqual(1);
        expect(mochHandleOnFilterChange.mock.calls[0][0]).toBe(55);
        expect(mochHandleOnFilterChange.mock.calls[0][1]).toBe(75);
    })
});