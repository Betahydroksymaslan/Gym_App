import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1/3;
  position: relative;
`;

export const Circle = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  position: relative;
  &::after,
  &::before {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 100%;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }
  &::after {
    top: 8px;
  }
  &::before {
    top: -8px;
  }
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: calc(100% - 30px);
  background-color: ${({ theme }) => theme.colors.active};
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
`;

export const MenuItem = styled.span`
    font-size: ${({theme}) => theme.fontSize.m};
    margin-bottom: 5px;
`;