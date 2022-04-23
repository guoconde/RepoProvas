import React from 'react';
import styled from 'styled-components';
import Logo from '../../images/Logo.png';

export default function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="logo_repo_provas" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  padding-left: 10%;
  padding-top: 50px;
`;
