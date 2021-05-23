import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  visibility: hidden;
`;

export const NotesWrapper = styled.div`
  width: 100%;
  padding: 15px;
  margin-top: 5px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.mainColorLight};
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.mainShadow};
`;

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BoxLabel = styled.span`
  margin-left: ${({ big }) => (big ? '0pxP' : '10px')};
  margin-top: 5px;
  font-size: ${({ theme, big }) => (big ? theme.fontSize.m : theme.fontSize.s)};
`;

export const IconWrapper = styled.div`
  width: 20px;
  margin-right: 15px;
  svg {
    width: 100%;
  }
`;

export const IconsWrapper = styled.div`
  display: flex;
`;

export const StyledTextarea = styled.textarea`
  outline: none;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.mainColorLight};
  border: none;
  padding: 0;
  margin: 0;
`;

export const AgreeChangeIcon = styled.div`
  width: 12px;
  height: 22px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};
  border-right: 2px solid ${({ theme }) => theme.colors.lightGrey};
  transform: rotate(35deg);
  margin: 0 15px 5px;
`;
