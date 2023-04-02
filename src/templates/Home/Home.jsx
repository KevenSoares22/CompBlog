import React, { useState } from 'react';

import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const pageTitle = 'Olá, seja bem vindo';
  const [query, setQuery] = useState();
  const [posts] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.home}>
      <h1 className="introdution">{pageTitle}</h1>

      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input type="text" placeholder="Pesquisar tag" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button className="btn btn-dark">Pesquisar</button>
      </form>

      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noPosts}>
            <p>Não encontramos publicações</p>
            <Link to="/posts/create" className="btn">
              Crie seu primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
