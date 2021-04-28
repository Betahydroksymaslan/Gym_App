import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const StyledLink = styled(Link)`
    display: flex;
    justify-content: center;
    width: ${({width}) => width || '100%'};
`;