import React, { useState, useEffect } from "react";

import { Pokemon } from "./types";

const List = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then(response => response.json())
      .then(json => {
        const pokemonList: Pokemon[] = json.results;
        for (let i = 0; i < pokemonList.length; i++) {
          pokemonList[i].name = pokemonList[i].name.substring(0, 1).toUpperCase() + pokemonList[i].name.substring(1);
          pokemonList[i].number = count + i + 1;
        }
        setPokemon(pokemonList);
        setCount(count + pokemonList.length);
      });
  }, []);

  return (
    <div>
      <h1>List</h1>
      <ul>
        {pokemon.map(pokemon => (
          <li key={pokemon.name}>{pokemon.number}. {pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
