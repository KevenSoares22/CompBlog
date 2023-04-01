import React from 'react';
import styles from './Navbar.module.css';

import { NavLink } from 'react-router-dom';

//import { useAuthentication } from '../../hooks/useAuthentication';

import { useAuthValue } from '../../context/AuthContext';

const Navbar = () => {
  const { user } = useAuthValue();

  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Components Blog
      </NavLink>

      <ul className={styles.links_list}>
        {!user && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}

        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
