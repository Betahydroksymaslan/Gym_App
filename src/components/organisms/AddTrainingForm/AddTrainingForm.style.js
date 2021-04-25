import styled from 'styled-components';

export const FormWrapper = styled.div`
  height: 100vh;
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mainColor};
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
