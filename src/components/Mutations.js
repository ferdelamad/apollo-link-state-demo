import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from 'react-apollo-hooks';

export const Mutations = () => {
  const increment = useMutation(gql`
    mutation increment {
      incrementCount @client
    }
  `);

  const setCount = useMutation(gql`
    mutation setCount($count: Int!) {
      setCount(count: $count) @client
    }
  `);

  const handleSetCount = () => {
    if (!input.value.trim()) {
      return;
    }

    setCount({
      variables: {
        count: parseInt(input.value)
      }
    })

    input.value = '';
  }

  let input;

  return (
    <div style={{ backgroundColor: 'lightgrey'}}>
      <h3>Mutations</h3>
      <div>
        <h5>Increment count by one</h5>
        <button onClick={() => increment()}>
          Increment!
        </button>
      </div>
      <div>
        <h5>Set Count</h5>
        <input ref={node => input = node} />
        <button onClick={() => handleSetCount() }>Set Count</button>
      </div>
    </div>
  );
}
