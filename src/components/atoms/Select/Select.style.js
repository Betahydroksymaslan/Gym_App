import styled from 'styled-components';

export const StyledSelect = styled.select`
  margin: 10px 0;
  background-color: ${({ theme }) => theme.colors.mainColorLight};
  color: ${({ theme }) => theme.colors.lightGrey};
  width: 70%;
  outline: none;
  border: none;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSize.m};
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
`;
