import styled from 'styled-components';

export const StyledForm = styled.form`
  width: 100%;
  height: ${({ height }) => height || 'auto'};
  display: flex;
  flex-direction: ${({ row }) => (row ? 'row' : 'column')};
  flex-wrap: ${({row}) => row ? 'wrap' : 'nowrap'};
  align-items: center;
  justify-content: ${({row}) => row ? 'space-evenly' : 'center'};
`;
