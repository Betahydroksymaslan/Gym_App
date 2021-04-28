import styled from 'styled-components';

export const StyledInput = styled.input`
  width: ${({ line }) => (line ? '85%' : '70%')};
  background-color: ${({ theme, line }) =>
    line ? 'transparent' : theme.colors.mainColorLight};
  border: none;
  border-bottom: ${({ line, theme }) =>
    line ? `1px solid ${theme.colors.lightGrey}` : 'none'};
  padding: ${({ small }) => (small ? '5px 10px' : '10px 20px')};
  border-radius: ${({ line }) => (line ? 'none' : '10px')};
  outline: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme, small }) =>
    small ? theme.fontSize.m : theme.fontSize.l};
  font-weight: 300;
  margin: 15px 0;
  box-shadow: ${({ theme, line }) =>
    line ? 'none' : theme.boxShadow.mainShadow};
`;
