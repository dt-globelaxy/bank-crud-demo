import React from 'react';
import ReactDOM from 'react-dom';
import { MockedProvider } from 'react-apollo/test-utils';
import App from './components/App';
import { GET_ACCOUNTS } from './components/account/queries/getAccounts';

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
        { id: 1, holdersName: 'Test Holder Name', employeeName: 'Employee Test Name', updated: '2019-03-31T10:07:56.747Z', created: '2019-03-31T10:07:56.747Z' }
      ],
    },
  },
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>, 
    div);
  ReactDOM.unmountComponentAtNode(div);
});
