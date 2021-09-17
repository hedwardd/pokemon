import React, { useEffect, useRef } from "react";
import { Pokemon } from "./types";

type ListProps = {
  pokemon: Pokemon[];
  handleNext: () => void;
}

const List = ({ pokemon, handleNext }: ListProps) => {
  const loader = useRef(null);

  useEffect(() => {
    var options = {
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
      console.log("Intersecting");
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
        <h2>Loading</h2>
      </div>
    </div>
  );
};

export default List;
