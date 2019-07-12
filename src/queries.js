import gql from 'graphql-tag';

export const GET_COUNT = gql`
  query getCount {
    count @client
  }
`;

export const GET_POKEMON = gql`
  query getPokemon($name: String!) {
    pokemon(name: $name) {
          name
          maxHP
    }
  }
`;
