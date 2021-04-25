import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  transform: translate(-50%, -50%);
  padding: 20px 0;
  background-color: ${({theme}) => theme.colors.mainColorLight};
  border-radius: 10px;
`;
