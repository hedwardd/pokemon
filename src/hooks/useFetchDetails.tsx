import React, { useState, useEffect } from "react";

import { PokemonDisplayDetails, PokemonFetchResult } from "../types";
import { getDisplayDetailsFromFetchResult } from "../util";

const fetchURL = "https://pokeapi.co/api/v2/pokemon/";

const useFetchDetails = () => {
  const [pokemon, setPokemon] = useState<PokemonDisplayDetails | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData(id: number) {
      setError(null);
      setLoading(true);
      try {
        const response = await fetch(`${fetchURL}${id}`);
        const data: PokemonFetchResult = await response.json();
        const displayDetails: PokemonDisplayDetails = getDisplayDetailsFromFetchResult(data);
        setPokemon(displayDetails);
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        } else {
          setError(new Error("Something went wrong."));
        }
        setLoading(false);
      }
    }
    if (id) {
      fetchData(id);
    }
  }, [id]);

  return { pokemon, loading, error, setId };
}

export default useFetchDetails;