import React from 'react';
import { useQuery } from '../../hooks/useQuery';
import { useFetchDocuments } from '../../hooks/useFetchDocument';

import PostDetail from '../../components/PostDetail/PostDetail';
import { Link } from 'react-router-dom';

const Search = () => {
  const query = useQuery();
  const search = query.get('q');

  const { documents: posts } = useFetchDocuments('posts', search);

  return (
    <div>
      <div>
        {posts && posts.length === 0 && (
          <>
            <h1>Não foram encontrados posts relacionados a {search}</h1>
            <Link to="/" className="btn">
              Voltar
            </Link>
          </>
        )}
        {posts &&
          posts.map((post) => {
            return <PostDetail key={post.id} post={post} />;
          })}
      </div>
    </div>
  );
};

export default Search;
