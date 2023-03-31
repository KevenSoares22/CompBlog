import React from 'react';
import styles from './Home.module.css';
const Home = () => {
  const pageTitle = 'Olá, seja bem vindo';

  return (
    <div>
      <h1 className={styles.introdution}>{pageTitle}</h1>
    </div>
  );
};

export default Home;
