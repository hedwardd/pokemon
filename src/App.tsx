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
    <div className="container flex max-h-screen mx-auto">
      <Viewer pokemon={pokemon} isLoading={isPokemonLoading} error={pokemonError} />
      <List pokemon={allPokemon} handleNext={handleNext} isLoading={isListLoading} error={listError} handleSelect={handleSelect} />
    </div>
  );
}

export default App;
