import React from 'react';
import ReactDOM from 'react-dom';
import Error from './Error';
import { ApolloError } from 'apollo-client';
import { shallow} from 'enzyme';

describe('Error component', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<Error error={new ApolloError({errorMessage: 'test'})} />);
        expect(wrapper.exists()).toBe(true);
    });
      
})
