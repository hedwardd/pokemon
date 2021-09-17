import React, { useState, useEffect } from "react";

import { Pokemon } from "./types";

const List = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  const [count, setCount] = useState(0);
  const [fetchURL, setFetchURL] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [toFetch, setToFetch] = useState(true);

  useEffect(() => {
    function fetchData() {
      fetch(fetchURL)
        .then(response => response.json())
        .then(json => {
          const pokemonList: Pokemon[] = json.results;
          for (let i = 0; i < pokemonList.length; i++) {
            pokemonList[i].name = pokemonList[i].name.substring(0, 1).toUpperCase() + pokemonList[i].name.substring(1);
            pokemonList[i].number = count + i + 1;
          }
          setPokemon([...pokemon, ...pokemonList]);
          setCount(count + pokemonList.length);
          setFetchURL(json.next);
          setToFetch(false);
        });
      }
    if (toFetch)
      fetchData();
  }, [toFetch]);

  const handleNext = () => {
    setToFetch(true);
  };


  return (
    <div>
      <h1>List</h1>
      <ul>
        {pokemon.map(pokemon => (
          <li key={pokemon.name}>{pokemon.number}. {pokemon.name}</li>
        ))}
      </ul>
      <button onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default List;
