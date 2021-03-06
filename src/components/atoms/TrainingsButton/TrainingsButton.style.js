import styled from 'styled-components';

export const StyledButton = styled.button`
  margin: 20px 0;
  padding: 15px 50px;
  width: 90%;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.mainColorLight};
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 200;
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  transition: background-color 0.2s ease, transform 0.2s ease;
  &:active {
    background-color: ${({ theme }) => theme.colors.active};
    transform: scale(1.02);
  }
`;