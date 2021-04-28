import styled from 'styled-components';

export const StyledButton = styled.input.attrs((props) => ({
  type: 'radio',
}))`
  position: relative;
  
  &::after {
    content: '${({ day }) => day}';
    display: block;
    background-color: ${({ theme }) => theme.colors.mainColorLight};
    font-size: ${({ theme }) => theme.fontSize.l};
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.lightGrey};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 45px;
    height: 45px;
    transition: all 0.3s ease;
  }
  &:checked::after {
    background-color: ${({ theme }) => theme.colors.active};
    transform: scale(1.1) translate(-46%, -47%);
  }
`;
