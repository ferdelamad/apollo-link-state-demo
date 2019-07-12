import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';

import './App.css';

import { DirectWrite } from './components/DirectWrite';
import { Mutations } from './components/Mutations';
import { Queries } from './components/Queries';
import { GET_COUNT } from './queries';

function App() {

  //initial test query
  const { data } = useQuery(GET_COUNT);

  return (
    <div className="App">
      <div>
        <h3>Query Test</h3>
        <p>Count {data.count}</p>
      </div>
      <div>
        <DirectWrite />
        <Mutations />
        <Queries />
      </div>
    </div>
  );
}

export default App;
