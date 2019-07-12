import { GET_COUNT } from './queries';

export const resolvers = {
  Mutation: {
    incrementCount: (_parent, _args, { cache }) => {
      let data;
      try {
        //try to get the data from the cache
        data = cache.readQuery({
          query: GET_COUNT
        })
      } catch(error) {
        console.log('Error: ', error);
      }

      //write the new count to the cache
      const count = data ? data.count + 1 : 1;
      cache.writeData({
        data: {
          count
        }
      })

      //return the new count - OPTIONAL
      return count;
    },
    setCount: (_parent, { count }, { cache }) => {
      cache.writeData({
        data: {
          count
        }
      })
    }
  }
}
