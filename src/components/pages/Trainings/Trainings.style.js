import styled from 'styled-components';

export const TrainingsWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: hidden;
`;
