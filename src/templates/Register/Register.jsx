import React, { useState } from 'react';
import styles from './Register.module.css';
const Register = () => {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const user = {
      displayName,
      password,
      email,
    };

    if (password !== confirmPassword) {
      setError('As senhas não coincidem');

      return;
    }

    console.log(user);
  };

  return (
    <div className={styles.register}>
      <h1>Cadastre-se</h1>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome</span>
          <input
            type="name"
            name="userName"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            required
            placeholder="Insira seu nome de usuario"
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Insira seu email"
          />
        </label>

        <label>
          <span>Senha</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Insira sua senha"
          />
        </label>
        <label>
          <span>Confirmar Senha</span>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirme sua senha"
          />
        </label>

        <input className="btn" type="submit" value="Cadastrar" />

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default Register;
