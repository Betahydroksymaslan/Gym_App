import styled from 'styled-components';

export const TemplateWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  & > div {
    width: 90%;
  }
`;

export const LastResultsBox = styled.div`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.mainColorLight};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  margin: 5px 0 15px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
    &#a5b155be-4bc1-4879-9cd7-b68f415fc7ab,
    &#bd036906-f292-4e3b-ae15-04a4aa2bc97f {
      width: 80%;
      height: 80%;
    }
  }
`;

export const StyledLabel = styled.span`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;
