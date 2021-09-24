import React from "react";

import { PokemonDisplayDetails } from "./types";

type TextBoxRowProps = {
  children: JSX.Element | JSX.Element[]
}

const TextBoxRow = ({ children }: TextBoxRowProps): JSX.Element => (
  <div className="flex justify-between w-full px-5 md:px-3">
    {children}
  </div>
);

type ViewerProps = {
  pokemon: PokemonDisplayDetails | null;
  isLoading: boolean;
  error: Error | null;
};

const Viewer = ({ pokemon, isLoading, error }: ViewerProps) => {

  const topText =
    error
      ? error.message
      : (isLoading)
        ? 'Loading...'
        : (pokemon)
          ? `${pokemon.name}`
          : 'Select a Pokemon!';

  const typeText =
    (pokemon)
      ? pokemon.types.join(', ')
      : null;

  const weightText = 
    (pokemon)
      ? `${pokemon.weight} hg`
      : null;

  const heightText =
    (pokemon)
      ? `${pokemon.height} dm`
      : null;

  return (
    <div className="flex flex-col items-center justify-between w-full py-2 pl-px h-1/2 md:h-full md:w-1/2">
      <div className="flex w-full px-5 mx-1 bg-red-500 border-4 border-black rounded h-1/6">
          <div className="flex flex-col items-center justify-center w-full border-t-2 border-b-2 border-l-4 border-r-4 border-red-200 bg-off-white">
            <h2 className="text-lg">{topText}</h2>
          </div>
        </div>

        {pokemon ? (<img className="flex-grow" src={pokemon.imageUrl} alt={pokemon.name} />) : null}

        {!error && pokemon && (
        <div className="flex w-full px-5 mx-1 bg-red-500 border-4 border-black rounded h-1/3">
          <div className="flex flex-col items-center justify-between w-full py-2 border-t-2 border-b-2 border-l-4 border-r-4 border-red-200 bg-off-white">
            <TextBoxRow>
              <p>Type:</p>
              <p className="text-right">{typeText}</p>
            </TextBoxRow>
            <TextBoxRow>
              <p>Weight:</p>
              <p className="text-right">{weightText}</p>
            </TextBoxRow>
            <TextBoxRow>
              <p>Height:</p>
              <p className="text-right">{heightText}</p>
            </TextBoxRow>
          </div>
        </div>
        )}
    </div>
  );
};

export default Viewer;

