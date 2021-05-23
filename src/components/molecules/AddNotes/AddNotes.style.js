import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 45px 0 0;
  background-color: ${({ theme }) => theme.colors.mainColor};
  position: relative;
`;

export const Text = styled.textarea`
  min-width: 90%;
  max-width: 90%;
  min-height: 100px;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.lightGrey};
  font-size: ${({ theme }) => theme.fontSize.m};
  border-radius: 10px;
  padding: 10px;
`;

export const Exit = styled.div`
  width: 35px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    transform: rotate(90deg);
  }
  position: absolute;
  top: 20px;
  right: 10px;
  transform: rotate(45deg);
`;
