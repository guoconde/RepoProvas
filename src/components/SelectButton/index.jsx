/* eslint-disable no-plusplus */
/* eslint-disable no-restricted-syntax */
/* eslint-disable consistent-return */
import React from 'react';
import styled from 'styled-components';

export default function SelectButton({ handlePath, path }) {
  return (
    <SelectButtonContainer>
      <StyledButtonDiscipline type="submit" isSelected={path} onClick={() => handlePath('discipline')}>disciplinas</StyledButtonDiscipline>
      <StyledButtonProfessor type="submit" isSelected={path} onClick={() => handlePath('professor')}>instrutor</StyledButtonProfessor>
      <StyledButtonAdd type="submit" isSelected={path} onClick={() => handlePath('add')}>adicionar</StyledButtonAdd>
    </SelectButtonContainer>
  );
}

const SelectButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButtonDiscipline = styled.button`
  background-color: ${({ isSelected }) => (isSelected === 'discipline' ? '#1976D2' : '#fff')};
  color: ${({ isSelected }) => (isSelected === 'discipline' ? 'white' : '#1976D2')};
  border: ${({ isSelected }) => (isSelected === 'discipline' ? 'none' : '1px solid #1976D2')};
`;

const StyledButtonProfessor = styled.button`
  background-color: ${({ isSelected }) => (isSelected === 'professor' ? '#1976D2' : '#fff')};
  color: ${({ isSelected }) => (isSelected === 'professor' ? 'white' : '#1976D2')};
  border: ${({ isSelected }) => (isSelected === 'professor' ? 'none' : '1px solid #1976D2')};
`;

const StyledButtonAdd = styled.button`
  background-color: ${({ isSelected }) => (isSelected === 'add' ? '#1976D2' : '#fff')};
  color: ${({ isSelected }) => (isSelected === 'add' ? 'white' : '#1976D2')};
  border: ${({ isSelected }) => (isSelected === 'add' ? 'none' : '1px solid #1976D2')};
`;
