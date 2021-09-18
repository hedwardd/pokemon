import React from "react";

import { Pokemon } from "./types";
type ListProps = {
  pokemon: Pokemon | null;
  isLoading: boolean;
  error: Error | null;
};

const Content = (isLoading: boolean, pokemon: Pokemon | null, error: Error | null) => {
  return isLoading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error.message}</div>
  ) : (
    <>
      <div>{pokemon?.name}</div>
      <img src={pokemon?.sprites?.front_default} />
    </>
  );
}

const Viewer = ({ pokemon, isLoading, error }: ListProps) => {

  return (
    <div className="w-6/12">
      <h1>Inspector</h1>
      {Content(isLoading, pokemon, error)}
    </div>
  );
};

export default Viewer;

