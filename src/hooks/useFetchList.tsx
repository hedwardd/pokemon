import React, { useState, useEffect } from "react";

import { PokemonResourceList, PokemonList } from "../types";
import { getListFromResourceList } from "../util";

const useFetchList = () => {
  const [allPokemon, setAllPokemon] = useState<PokemonList>([]);
  const [fetchURL, setFetchURL] = useState<string | null>("https://pokeapi.co/api/v2/pokemon?limit=50");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [toFetch, setToFetch] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setError(null);
      setLoading(true);
      try {
        const response = await fetch(fetchURL!);
        const data = await response.json();
        const pokemonResourceList: PokemonResourceList = data.results;
        const pokemonListItems: PokemonList = getListFromResourceList(pokemonResourceList);
        setAllPokemon([...allPokemon, ...pokemonListItems]);
        setFetchURL(data.next);
        setLoading(false);
        setToFetch(false);
      } catch (err) {
        if (err instanceof TypeError) {
          setError(err);
        } else {
          setError(new Error("Something went wrong"));
        }
        console.log(err);
        // setError(err);
        setLoading(false);
        setToFetch(false);
      }
    }
    if (toFetch && fetchURL) {
      fetchData();
    }
  }, [toFetch]);

  return { allPokemon, loading, error, setToFetch };
}

export default useFetchList;