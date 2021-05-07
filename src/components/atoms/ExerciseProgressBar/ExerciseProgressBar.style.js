import styled from 'styled-components';

export const BarWrapper = styled.div`
  width: 100%;
`;

export const Bar = styled.div`
  height: 5px;
  width: ${({width}) => width || '0%'};
  transition: all 0.3s ease-in-out;
  background-color: ${({ theme }) => theme.colors.green};
`;
