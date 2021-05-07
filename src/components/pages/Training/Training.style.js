import styled from 'styled-components';

export const TrainingWrapper = styled.div`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.mainColor};
  display: flex;
  overflow-y: scroll;
  flex-direction: column;
  align-items: center;
  padding: 5% 0;
  visibility: hidden;
`;
export const DayWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px 0;
`;

export const ExerciseWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template: 1fr / 3fr 1fr 1fr;
  margin: 5px 0;
`;

export const ButtonsWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

export const ExerciseName = styled.span`
  justify-self: center;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ template }) => (template ? '500' : '300')}; ;
`;

export const RepsSpan = styled.span`
  padding-left: ${({ template }) => (template ? '15px' : '0')};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ template }) => (template ? '500' : '300')};
`;

export const SeriesSpan = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ template }) => (template ? '500' : '300')};
`;

export const Back = styled.div`
  width: 30px;
  height: 30px;
  border-bottom: 2px solid ${({theme}) => theme.colors.lightGrey};
  border-left: 2px solid ${({theme}) => theme.colors.lightGrey};
  position: absolute;
  top: 20px;
  left: 25px;
  transform: rotate(45deg);
`;