import React, { useState, useEffect } from "react";

import { Pokemon } from "../types";

const fetchURL = "https://pokeapi.co/api/v2/pokemon/";

const useFetchDetails = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [id, setId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchData(id: number) {
      try {
        setLoading(true);
        const response = await fetch(`${fetchURL}${id}`);
        const data = await response.json();
        setPokemon(data);
        setLoading(false);
      } catch (err) {
        if (err instanceof TypeError) {
          setError(err);
        } else {
          setError(new Error("Something went wrong"));
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