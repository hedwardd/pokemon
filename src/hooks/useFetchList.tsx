import React, { useState, useEffect } from "react";

import { Pokemon } from "../types";

const useFetchList = () => {
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);
  const [fetchURL, setFetchURL] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [count, setCount] = useState(0)
  const [toFetch, setToFetch] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch(fetchURL);
        const data = await response.json();
        const pokemonList: Pokemon[] = data.results;
        for (let i = 0; i < pokemonList.length; i++) {
          pokemonList[i].name = pokemonList[i].name.substring(0, 1).toUpperCase() + pokemonList[i].name.substring(1);
          pokemonList[i].number = count + i + 1;
        }
        setAllPokemon([...allPokemon, ...pokemonList]);
        setCount(count + pokemonList.length);
        setFetchURL(data.next);
        setLoading(false);
        setToFetch(false);
      } catch (error) {
        console.log(error);
        setError("Error fetching list of pokemon.");
        setLoading(false);
        setToFetch(false);
      }
    }
    if (toFetch) {
      fetchData();
    }
  }, [toFetch]);

  return { allPokemon, loading, error, setToFetch };
}

export default useFetchList;