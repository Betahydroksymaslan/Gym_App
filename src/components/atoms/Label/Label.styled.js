import styled from 'styled-components';

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: 300;
  text-align: center;
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  margin-top: ${({ marginTop }) => marginTop || '0'};
  padding: 0 5%;
`;
