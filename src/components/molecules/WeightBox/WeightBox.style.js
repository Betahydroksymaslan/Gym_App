import styled from 'styled-components';

export const StyledLabel = styled.span`
  margin-left: 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const StyledBox = styled.div`
  width: 150px;
  height: 93px;
  background-color: ${({ theme }) => theme.colors.mainColorLight};
  border-radius: 20px;
  margin: 5px 0;
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  ${({ theme }) => theme.media.phoneNarrow} {
    width: 130px;
    height: 80px;
  }
`;

export const IconWrapper = styled.div`
  width: 50px;
  svg {
    width: 100%;
  }
  ${({ theme }) => theme.media.phoneNarrow} {
    width: 45px;
  }
`;

export const WeightValue = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
