import React, { useEffect, useState } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, error: authError, loading } = useAuthentication();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    const user = {
      email,
      password,
    };
    const res = await login(user);
    console.log(res);
  };
  useEffect(() => {
    setError(authError);
  }, [authError]);
  return (
    <div className={styles.login}>
      <h1 className="introdution">Faça seu Login</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Insira seu email"
            required
          />
        </label>
        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Insira sua senha"
            required
          />
        </label>
        {loading && (
          <button className="btn" type="submit" disabled>
            Aguarde...
          </button>
        )}
        {!loading && (
          <button className="btn" type="submit">
            Entrar
          </button>
        )}

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
