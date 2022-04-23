import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const PasswordDiv = styled.div`
  position: relative;

  .icon {
    height: 56px;
    font-size: 25px;
    color: rgba(0, 0, 0, 0.5);;
    position: absolute;
    right: 15px;
    cursor: pointer;
  }
`;

export const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 15px;
`;
