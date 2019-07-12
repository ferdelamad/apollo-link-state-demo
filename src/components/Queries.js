import React, { useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { GET_POKEMON } from '../queries';

export const Queries = () => {
  let input;
  let [ pokemon, setPokemon ] = useState('');

  const { data, loading } = useQuery(GET_POKEMON, {
    variables: { name: pokemon }
  })

  const handleClick = () => {
    if (!input.value) {
      return;
    }
    setPokemon(input.value);
  }

  return (
    <div style={{ backgroundColor: 'tomato', color: 'white'}}>
     <h3>Queries component</h3>
     <label htmlFor="pokemonName">
      Pokemon name:
      <input ref={node => input = node}/>
     </label>
      <div>
        <button onClick={handleClick}>Get pokemon</button>
      </div>
      <div>
        {loading && <h5>Loading...</h5>}
        {data.hasOwnProperty('pokemon') && <p>Name: {data.pokemon.name} || Hp: {data.pokemon.maxHP} </p> }
      </div>
    </div>
  );
}


