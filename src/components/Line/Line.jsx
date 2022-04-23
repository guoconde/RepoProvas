import React from 'react';
import { LineContainer, LineDiv, LineP } from './styled';

// eslint-disable-next-line react/prop-types
export default function Line({ visibleLabel }) {
  return (
    <LineContainer>
      <LineDiv />
      {visibleLabel && <LineP>ou</LineP>}
    </LineContainer>
  );
}
