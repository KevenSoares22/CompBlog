import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetch('posts', id);

  return (
    <div>
      {loading && <p>Carregando...</p>}

      {post && (
        <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />

          <p>
            {post.tagsList.map((tag) => (
              <>
                <span>#</span>
                {tag}
              </>
            ))}
          </p>
          <h2>{post.body}</h2>
        </>
      )}
    </div>
  );
};

export default Post;
