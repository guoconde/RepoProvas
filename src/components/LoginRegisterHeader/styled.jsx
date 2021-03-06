import styled from 'styled-components';

export const Container = styled.div`
  width: 60%;
  height: 100vh;

  margin: 0 auto;
  padding-top: 60px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  > div {
    width: 100%;
  }
`;

export const ButtonGithub = styled.button`
  width: 100%;
  background-color: #424445;

  padding: 0;
  margin: 35px 0 15px 0;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: center;
`;
