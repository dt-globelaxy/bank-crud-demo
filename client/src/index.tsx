import React from 'react';
import {InMemoryCache} from 'apollo-cache-inmemory'
import {ApolloClient} from 'apollo-client'
import {HttpLink} from 'apollo-link-http'
import {ApolloProvider} from 'react-apollo'
import {render} from 'react-dom'
import {IntlProvider} from 'react-intl'
import { BrowserRouter } from 'react-router-dom'

import App from './components/App'

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({uri: process.env.API_URL || 'http://localhost:3003/graphql' })
})

const hookEl = document.getElementById('root')as HTMLElement

const RootTree = (
    <BrowserRouter>
        <ApolloProvider client={client}>
            <IntlProvider locale="en">
                <App/>
            </IntlProvider>
        </ApolloProvider>
    </BrowserRouter>
)

render(RootTree, hookEl)