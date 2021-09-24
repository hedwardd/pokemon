import React, { useEffect, useRef } from "react";

import { PokemonList } from "./types";

const displayNumber = (num: number) => num.toString().padStart(3, "0");

type ListProps = {
  pokemon: PokemonList;
  handleNext: () => void;
  isLoading: boolean;
  error: Error | null;
  handleSelect: (id: number) => void;
}

const List = ({ pokemon, handleNext, isLoading, error, handleSelect }: ListProps) => {
  const listRef = useRef<HTMLUListElement>(null);
  const loader = useRef(null);

  const [selected, setSelected] = React.useState<number | null>(null);

  useEffect(() => {
    const options = {
      root: listRef.current,
      rootMargin: "10px",
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
       observer.observe(loader.current)
    }
}, [listRef, loader]);

  const handleObserver: IntersectionObserverCallback = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      handleNext();
    }
  }
  return (
    <div className="flex flex-col w-full px-px py-2 h-1/2 md:h-full md:w-1/2">
      <div className="flex w-full h-full px-5 mx-1 bg-red-500 border-4 border-black rounded">
        <ul className="flex flex-col w-full h-full overflow-y-scroll border-t-2 border-b-2 border-l-4 border-r-4 border-red-200 bg-off-white scroll-snap-y" ref={listRef}>
          {pokemon.map(({ name, id }) => (
            <li
              key={name}
              className={`px-3 py-3 scroll-snap-start cursor-pointer ${selected === id ? 'outline-red rounded' : ''}`}
              onClick={() => {
                handleSelect(id);
                setSelected(id);
            }}
            >
              <p
                className={'overflow-hidden whitespace-nowrap overflow-ellipsis'}
              >
                {displayNumber(id)} <span className={`${id < 10000 ? 'text-sm' : 'text-xs'}`}>{name}</span>
              </p>
            </li>
            ))}
          <div ref={loader}>
            {isLoading && <h2>Loading</h2>}
            {error && <h2>{error.message}</h2>}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default List;
