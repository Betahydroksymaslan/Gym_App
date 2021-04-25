import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  height: ${({ height }) => height || 'auto'};
  max-height: 70%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
