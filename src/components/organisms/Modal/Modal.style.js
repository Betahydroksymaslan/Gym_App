import styled from 'styled-components';

export const ModalWrapper = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow.mainShadow};
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  border-radius: 15px;
  max-height: 90%;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
`;
