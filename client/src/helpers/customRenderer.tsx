import * as React from 'react';
import { MockedProvider, MockedResponse } from 'react-apollo/test-utils';
import { Router, Switch} from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from 'enzyme';
import { createShallow, createMount, createRender } from '@material-ui/core/test-utils';


export const customRenderer = (
    node: JSX.Element | null, 
    mocks?: MockedResponse[], 
    {
        route = '/',
        history = createMemoryHistory({initialEntries: [route]})
    } = {}
) => {
    return {
        history,
        ...createRender()(
            <MockedProvider mocks={mocks} addTypename={false}>
                <Router history={history} >
                    <Switch>{node}</Switch>
                </Router>
            </MockedProvider>
        )
    }
}