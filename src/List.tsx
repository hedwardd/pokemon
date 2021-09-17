import React, { useEffect, useRef } from "react";
import { Pokemon } from "./types";

type ListProps = {
  pokemon: Pokemon[];
  handleNext: () => void;
  isLoading: boolean;
  error: Error | null;
}

const List = ({ pokemon, handleNext, isLoading, error }: ListProps) => {
  const loader = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
       observer.observe(loader.current)
    }
}, []);

  const handleObserver: IntersectionObserverCallback = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      handleNext();
    }
  }

  return (
    <div>
      <h1>List</h1>
      <ul>
        {pokemon.map(pokemon => (
          <li
            key={pokemon.name}
            className="py-4"
          >{pokemon.number}. {pokemon.name}</li>
        ))}
      </ul>
      <div ref={loader}>
        {isLoading && <h2>Loading</h2>}
        {error && <h2>{error.message}</h2>}
      </div>
    </div>
  );
};

export default List;
