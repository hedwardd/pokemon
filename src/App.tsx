import React from 'react';

import './App.css';
import List from './List';
import Viewer from './Viewer';
import useFetchList from './hooks/useFetchList';
import useFetchDetails from './hooks/useFetchDetails';

function App() {

  const { allPokemon, loading: isListLoading, error: listError, setToFetch } = useFetchList();
  const { pokemon, loading: isPokemonLoading, error: pokemonError, setId } = useFetchDetails();

  const handleNext = () => {
    setToFetch(true);
  }

  const handleSelect = (id: number) => {
    setId(id);
  }

  return (
    <div className="container flex items-center justify-center h-screen mx-auto md:max-w-screen-md">
      <div className="flex flex-col md:flex-row h-1/2 bg-grid bg-40 bg-off-white">
        <Viewer pokemon={pokemon} isLoading={isPokemonLoading} error={pokemonError} />
        <List pokemon={allPokemon} handleNext={handleNext} isLoading={isListLoading} error={listError} handleSelect={handleSelect} />
      </div>
    </div>
  );
}

export default App;
