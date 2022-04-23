import React from 'react';
import Line from '../../components/Line/Line';
import Logo from '../../images/Logo.png';
import RegisterForm from './RegisterForm';

export default function Register() {
  return (
    <div>
      <img src={Logo} alt="logo_repo_provas" />
      <h1>Cadastro</h1>
      <button type="submit">ENTRAR COM O GITHUB</button>
      <Line visibleLabel />
      <RegisterForm />
    </div>
  );
}
