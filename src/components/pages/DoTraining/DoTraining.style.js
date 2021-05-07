import styled from 'styled-components';

export const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.mainColor};
  visibility: hidden;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  padding: 35px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NextPrevArrow = styled.div`
  width: 30px;
  height: 30px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};
  border-left: 2px solid ${({ theme }) => theme.colors.lightGrey};
  transform: ${({ rotated }) =>
    rotated ? 'rotate(-135deg)' : 'rotate(45deg)'};
`;

export const HeaderName = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  max-width: 80%;
  text-align: center;
`;

export const ActualWeight = styled.h1`
  font-size: 70px;
  font-weight: 200;
  margin: 10px 0 30px;
`;

export const ButtonsWrapper = styled.div`
  width: ${({ wider }) => (wider ? '100%' : '70%')};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const ChartAndWeightWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export const LastBox = styled.div`
  width: 150px;
  height: 76px;
  background-color: ${({ theme }) => theme.colors.mainColorLight};
  border-radius: 15px;
  margin-top: 5px;
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 5px;
`;

export const StyledLabel = styled.span`
  margin: 0 0 0 10px;
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const IconWrapper = styled.div`
  width: 34px;
  svg {
    width: 100%;
  }
`;

export const SeriesValue = styled.span`
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
