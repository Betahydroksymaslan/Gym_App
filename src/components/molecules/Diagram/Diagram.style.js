import styled from 'styled-components';

export const StyledLabel = styled.span`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const StyledDiagram = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.mainColorLight};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  margin: 5px 0 20px;
  overflow: hidden;
  position: relative;
`;

export const Average = styled.span`
  font-size: ${({ theme }) => theme.fontSize.l};
  position: absolute;
  top: 20px;
  left: 20px;
`;
