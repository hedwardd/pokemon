import React from 'react';

import './App.css';
import List from './List';
import useFetchList from './hooks/useFetchList';

function App() {

  const { allPokemon, loading: isListLoading, error: listError, setToFetch } = useFetchList();

  const handleNext = () => {
    setToFetch(true);
  }

  return (
    <div className="container mx-auto">
      <List pokemon={allPokemon} handleNext={handleNext} />
    </div>
  );
}

export default App;
