import gql from 'graphql-tag';

export const countQuery = gql`
  query MyCount {
    count @client
  }
`;
