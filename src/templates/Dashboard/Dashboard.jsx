import React from 'react';

import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocuments } from '../../hooks/useFetchDocument';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';

import { Link } from 'react-router-dom';

import styles from './Dashboard.module.css';

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.id;
  const { documents: posts } = useFetchDocuments('posts', null, uid);

  const { deleteDocument } = useDeleteDocument('posts');

  return (
    <div className={styles.dashboard}>
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
          <h1>Gerencie seus posts</h1>
        </div>
      )}
      <div className={styles.post_header}>
        <span>Titulo</span>
        <span>Ações</span>
      </div>
      {posts &&
        posts.map((post) => (
          <div key={post.id} className={styles.post_row}>
            <h3>{post.title}</h3>
            <div>
              <Link to={`/post/${post.id}`} className="btn btn-outline">
                Ver
              </Link>
              <Link className="btn btn-danger" onClick={() => deleteDocument(post.id)}>
                Excluir
              </Link>
            </div>
          </div>
        ))}
      ;
    </div>
  );
};

export default Dashboard;
