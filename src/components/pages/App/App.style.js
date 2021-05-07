import styled from 'styled-components';

export const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: ${({ theme }) => theme.colors.lightGrey};
`;
