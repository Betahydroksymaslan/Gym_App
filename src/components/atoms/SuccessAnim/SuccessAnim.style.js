import styled from 'styled-components';

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  overflow: visiblel;
  display: flex;
  justify-content: center;
  align-items: center;
  visibility: hidden;
  svg {
    width: 50%;
  }
`;
