import React from 'react';
import { useQuery } from '../../hooks/useQuery';

const Search = () => {
  const query = useQuery();
  const search = query.get('q');

  return (
    <div>
      <h1>Voce pesquisou:</h1>
      <p>{search}</p>
    </div>
  );
};

export default Search;