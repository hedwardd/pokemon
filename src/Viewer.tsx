import React from "react";

import { PokemonDisplayDetails } from "./types";

const TextBox = (props: any): JSX.Element => (
  <div className="flex w-full px-5 mx-1 bg-red-500 border-4 border-black rounded">
    <div className="flex flex-col items-center justify-center w-full border-t-2 border-b-2 border-l-4 border-r-4 border-red-200 bg-off-white">
      {props.children}
    </div>
  </div>
);

const TextBoxRow = (props: any): JSX.Element => (
  <div className="flex justify-between w-full px-9">
    {props.children}
  </div>
);

type ListProps = {
  pokemon: PokemonDisplayDetails | null;
  isLoading: boolean;
  error: Error | null;
};

type PokemonDisplayProps = {
  pokemon: PokemonDisplayDetails | null;
} 

const DetailsDisplay = ({ pokemon }: PokemonDisplayProps) => (
  <>
    {pokemon ? (
      <>
        <TextBox>
          <h2 className="text-lg">{pokemon.name}</h2>
        </TextBox>
        <img className="h-64" src={pokemon.imageUrl} alt={pokemon.name} />
        <TextBox>
          <TextBoxRow>
            <p className="text-lg">Type:</p>
            <p className="text-lg">{pokemon.types.join(", ")}</p>
          </TextBoxRow>
          <TextBoxRow>
            <p className="text-lg">Weight:</p>
            <p className="text-lg">{pokemon.weight} hg</p>
          </TextBoxRow>
          <TextBoxRow>
            <p className="text-lg">Height:</p>
            <p className="text-lg">{pokemon.height} dm</p>
          </TextBoxRow>
        </TextBox>
      </>
    ) : (
      <TextBox>Select a Pokemon!</TextBox>
    )}
  </>

);

const Viewer = ({ pokemon, isLoading, error }: ListProps) => {
  return (
    <div className="flex flex-col items-center justify-between w-1/2 py-2 pl-px">
      {isLoading ? (
        <TextBox><p className="text-lg">Loading...</p></TextBox>
      ) : error ? (
        <TextBox>{error.message}</TextBox>
      ) : (
        <DetailsDisplay pokemon={pokemon} />
      )
    }
    </div>
  );
};

export default Viewer;

