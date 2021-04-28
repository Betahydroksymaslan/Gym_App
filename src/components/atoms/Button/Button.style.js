import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 20px 0;
  padding: ${({ small }) => (small ? '10px 20px' : '15px 50px')};
  width: ${({ wider }) => wider && '100%'};
  border-radius: ${({ wider }) => (wider ? '10px' : '15px')};
  background-color: ${({ theme, active }) =>
    active ? theme.colors.active : theme.colors.mainColorLight};
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme, small }) =>
    small ? theme.fontSize.xs : theme.fontSize.l};
  font-weight: ${({ small }) => (small ? '400' : '200')};
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  transition: background-color 0.2s ease, transform 0.2s ease;
  &:active {
    background-color: ${({ theme }) => theme.colors.active};
    transform: scale(1.02);
  }
  &:disabled {
    opacity: 0.3;
  }
`;
