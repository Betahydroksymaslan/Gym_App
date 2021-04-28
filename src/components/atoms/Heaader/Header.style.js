import styled from 'styled-components';

export const StyledHeader = styled.h1`
  font-weight: 300;
  font-size: ${({ theme, small }) => small ? theme.fontSize.l : theme.fontSize.headers};
  margin-bottom: 20px;
`;
