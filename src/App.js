import React from 'react';
import gql from 'graphql-tag'
import { useQuery } from "react-apollo-hooks";

import './App.css';

import { DirectWrite } from './components/DirectWrite'
import { Mutations } from './components/Mutations'

function App() {

  //initial test query
  const countQuery = useQuery(
    gql`
      query Count {
        count @client
      }
    `
  );

  return (
    <div className="App">
      <div>
        <h3>Query Test</h3>
        <p>Count {countQuery.data.count}</p>
      </div>
      <div>
        <DirectWrite />
        <Mutations />
      </div>
    </div>
  );
}

export default App;
