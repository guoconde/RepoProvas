import React from 'react';
import styled from 'styled-components';
import Header from '../../components/HomeHeader';
import Line from '../../components/Line/Line';

export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <Line visibleLabel={false} />
    </HomeContainer>
  );
}

const HomeContainer = styled.div`

`;
