import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomeWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  visibility: hidden;
`;

export const StyledLink = styled(Link)`
  background-color: transparent;
  padding: 0;
  margin: 0;
  color: ${({ theme }) => theme.colors.lightGrey};
  width: 90%;
  
`;
