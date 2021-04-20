import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 70%;
  background-color: ${({ theme }) => theme.colors.mainColorLight};
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  outline: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({theme}) => theme.fontSize.l};
  font-weight: 300;
  margin: 15px 0;
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow}
`;
