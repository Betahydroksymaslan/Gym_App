import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 20px 0;
  padding: ${({ small, squere }) => {
    if (small) return '10px 20px';
    if (squere) return '0';
    if (!small) return '15px 50px';
  }};
  width: ${({ wider, squere }) => {
    if (wider) return '100%';
    if (squere) return '70px';
  }};
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ squere }) => squere && '70px'};
  border-radius: ${({ wider }) => (wider ? '10px' : '15px')};
  background-color: ${({ theme, active, dark }) => {
    if (active) {
      return theme.colors.active;
    } else if (dark) {
      return theme.colors.mainColor;
    } else {
      return theme.colors.mainColorLight;
    }
  }};
  border: none;
  outline: none;
  color: ${({ theme, green }) => {
    if (green) return theme.colors.green;
    return theme.colors.lightGrey;
  }};
  font-size: ${({ theme, small }) =>
    small ? theme.fontSize.xs : theme.fontSize.l};
  font-weight: ${({ small, bold }) => {
    if (bold) return '500';
    if (small) return '400';
    return '200';
  }};
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
