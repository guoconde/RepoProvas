import React from 'react';
import Line from '../../components/Line/Line';
import { ButtonGithub, Container, Title } from '../../components/LoginRegisterHeader/styled';
import Logo from '../../images/Logo.png';
import LoginForm from './LoginForm';

export default function Login() {
  return (
    <Container>
      <img src={Logo} alt="logo_repo_provas" />
      <div>
        <Title>Login</Title>
        <ButtonGithub type="submit">ENTRAR COM O GITHUB</ButtonGithub>
        <Line visibleLabel />
        <LoginForm />
      </div>
      <div />
    </Container>
  );
}
