import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/HomeHeader';
import Add from './add';
import Discipline from './discipline';
import Professor from './professor';

export default function Home() {
  const [renderPage, setRenderPage] = useState('discipline');

  const handlePath = (value) => {
    setRenderPage(value);
  };
  return (
    <HomeContainer>
      <Header />
      {renderPage === 'discipline' && <Discipline handlePath={handlePath} path="discipline" />}
      {renderPage === 'professor' && <Professor handlePath={handlePath} path="professor" /> }
      {renderPage === 'add' && <Add handlePath={handlePath} path="add" />}
    </HomeContainer>
  );
}

const HomeContainer = styled.div`

`;
