import styled from 'styled-components';

export const Wrapper = styled.form`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainColorLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 20px 0 10px;
  visibility: hidden;
`;

export const ButtonsWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;

export const Value = styled.input`
  font-size: 60px;
  font-weight: 300;
  background-color: transparent;
  border: none;
  width: 100%;
  color: ${({ theme }) => theme.colors.lightGrey};
  text-align: center;
  outline: none;
`;

export const Plus = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    transform: rotate(90deg);
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 5px;
  }
`;

export const Minus = styled.div`
  width: 25px;
  height: 3px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 5px;
`;

export const Escape = styled(Plus)`
  transform: rotate(45deg) scale(1.4);
  position: absolute;
  top: 35px;
  right: 20px;
  height: 2px;
`;
