import React from 'react';
import Line from '../../components/Line/Line';
import { ButtonGithub, Container, Title } from '../../components/LoginRegisterHeader/styled';
import Logo from '../../images/Logo.png';
import RegisterForm from './RegisterForm';

export default function Register() {
  return (
    <Container>
      <img src={Logo} alt="logo_repo_provas" />
      <div>
        <Title>Cadastro</Title>
        <ButtonGithub type="submit">ENTRAR COM O GITHUB</ButtonGithub>
        <Line visibleLabel />
        <RegisterForm />
      </div>
      <div />
    </Container>
  );
}
