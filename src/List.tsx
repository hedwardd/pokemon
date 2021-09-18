import React, { useEffect, useRef } from "react";
import { Pokemon } from "./types";

type ListProps = {
  pokemon: Pokemon[];
  handleNext: () => void;
  isLoading: boolean;
  error: Error | null;
  handleSelect: (id: number) => void;
}

const List = ({ pokemon, handleNext, isLoading, error, handleSelect }: ListProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const loader = useRef(null);

  useEffect(() => {
    const options = {
      root: listRef.current,
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
    <div className="w-6/12 max-h-full">
      <h1>List</h1>
      <ul className="overflow-y-scroll h-3/6" ref={listRef}>
        {pokemon.map(pokemon => (
          <li
            key={pokemon.name}
            className="py-4"
            onClick={() => {
              handleSelect(pokemon.number);
            }}
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
