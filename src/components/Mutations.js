import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';

export const Mutations = () => {
  const increment = useMutation(gql`
    mutation Increment {
      incrementCount @client
    }
  `);

  return (
    <div>
      <h3>Mutations</h3>
      <button onClick={() => increment()}>
        Increment Cache Count
      </button>
    </div>
  );
}
