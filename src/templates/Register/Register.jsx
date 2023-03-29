import React from 'react';

const Register = () => {
  return (
    <div>
      <h1>Cadastre-se</h1>

      <form>
        <label>
          <span>Nome</span>
          <input type="name" name="userName" required placeholder="Insira seu nome de usuario" />
        </label>

        <label>
          <span>Email</span>
          <input type="email" name="email" required placeholder="Insira seu email" />
        </label>
        <label>
          <span>Senha</span> <input type="password" name="password" required placeholder="Insira sua senha" />
        </label>
        <label>
          <span>Confirmar Senha</span>
          <input type="password" name="confirmPassword" required placeholder="Confirme sua senha" />
        </label>

        <input type="submit" value="Cadastrar" />
      </form>
    </div>
  );
};

export default Register;
