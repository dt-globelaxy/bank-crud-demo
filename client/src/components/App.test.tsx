import React from 'react';
import ReactDOM from 'react-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import App from './App';
import { GET_ACCOUNTS } from './account/queries/getAccounts';
import { AccountType } from './account/models';
import createComponentWithIntl from '../helpers/createComponentWithIntl';
import { shallow, mount } from 'enzyme';
import Drawer from './layout/Drawer';

const mocks = [
  {
    request: {
      query: GET_ACCOUNTS,
      variables: {
        page: 0,
        perPage: 15,
        order: 'asc',
        orderBy: 'holdersName'
      },
    },
    result: {
      data: [
        { id: 1, holdersName: 'Test Holder Name', bankId: 1, bank: { name: 'test'} , number: 452, type: AccountType.Savings, employeeNumber: 777, employeeName: 'Employee Test Name', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' }
      ],
    },
  },
];
describe('App component', () => {
  it('renders without crashing', () => {
      const wrapper = shallow(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>);
      expect(wrapper).toMatchSnapshot();
  });

  it('renders Drawer', () => {
    const wrapper = mount(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>);

    expect(wrapper.find(Drawer).exists()).toEqual(true);
  });
});