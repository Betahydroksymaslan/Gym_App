import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.mainColor};
`;

export const Header = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.headers};
  font-weight: 300;
`;

export const LinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.active};
  text-decoration: underline;
`;

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.red};
`;

export const ServerErrorMessage = styled.div`
  width: 70%;
  background-color: ${({theme}) => theme.colors.red};
  padding: 10px 0;
  border-radius: 10px;
  text-align: center;
  font-size: ${({theme}) => theme.fontSize.s};
`;