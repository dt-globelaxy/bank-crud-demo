import React from 'react';
import { MockedProvider } from "@apollo/react-testing";
import App from './App';
import { shallow, mount } from 'enzyme';
import Drawer from './layout/Drawer';
import Header from './layout/Header';
import Routes from './layout/Routes';
import { MemoryRouter } from 'react-router-dom';
import { getAccountsMock } from '../helpers/mocks/account/queries/getAccounts';


describe('App component', () => {
  it('renders without crashing', () => {
      const wrapper = shallow(
        <MockedProvider mocks={getAccountsMock} addTypename={false}>
          <App />
        </MockedProvider>
      );
      expect(wrapper).toMatchSnapshot();
  });

  it('renders Drawer, Header, Routes', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={[ '/' ]}>
        <MockedProvider mocks={getAccountsMock} addTypename={false}>
          <App />
        </MockedProvider>
      </MemoryRouter>);

    expect(wrapper.find(Drawer).length).toEqual(1);
    expect(wrapper.find(Header).length).toEqual(1);
    expect(wrapper.find(Routes).length).toEqual(1);
  });
});