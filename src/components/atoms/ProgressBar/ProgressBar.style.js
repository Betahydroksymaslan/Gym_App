import styled from 'styled-components';

export const ProgressBarWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProgressBarBall = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  display: flex;
  color: ${({active, theme}) => active ? `${theme.colors.lightGrey}` : `${theme.colors.mainColor}`};
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;
  background-color: ${({ theme, active }) =>
    active ? theme.colors.active : theme.colors.lightGrey};
`;

export const ProgressBarMain = styled.div`
  width: 20%;
  height: 1px;
  margin: 0 10px;
  transition: all 0.3s ease;
  background-color: ${({ theme, active }) => active ? `${theme.colors.active}` : `${theme.colors.lightGrey}`};
`;
