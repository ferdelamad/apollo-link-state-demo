import React from 'react';
import ReactDOM from 'react-dom';
//Apollo deps
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import { resolvers } from './resolvers';

import './index.css';
import App from './App';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon.now.sh',
  resolvers
})

//initialize apollo cache
const initData = () =>
  client.writeData({
    data: {
      count: 123,
    }
  })

initData();

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />,
  </ApolloProvider>,
  document.getElementById('root')
);

