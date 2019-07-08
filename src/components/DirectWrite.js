import React from 'react';
import { useApolloClient } from 'react-apollo-hooks';

//Example of simple writes
//writeData does not validate the shape of the data saved to the cache.

export const DirectWrite = () => {
  const client = useApolloClient();
  return (
    <div>
      <h3>Direct write</h3>
      <button onClick={() => client.writeData({
        data: { count: 0 }
      })}>
        Set count back to 0
      </button>
    </div>
  );
}
