import React from 'react';

import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocument';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.id;
  const { documents: posts } = useFetchDocuments('posts', null, uid);
  return (
    <div>
      <h1 className="introdution">Dashboard</h1>

      {posts && posts.length === 0 ? (
        <div>
          <h1>Sem posts{uid}</h1>

          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div>
          <h1>Tem posts</h1>
        </div>
      )}

      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default Dashboard;
