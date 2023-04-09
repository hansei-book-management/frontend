import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

export const NavBarWrapper = styled(motion.nav)`
  width: 100%;
  height: 5rem;
  z-index: 9999;
  position: fixed;
  backdrop-filter: blur(10px);
  /* background-color: ${({ theme }) => theme.navbar.background}; */
`;

export const NavBarContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1400px;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavbarMenuContainer = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
`;
export const TitleLink = styled(Link)`
  font-size: 1.8rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

export const MenuItem = styled(Link)<{ isActive: boolean }>`
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  color: ${({ theme }) => theme.navbar.unselected};
  transition: color 150ms;
  ${(props) =>
    props.isActive &&
    css`
      color: ${({ theme }) => theme.black};
    `}
`;

export const UserName = styled.span`
  font-size: 1rem;
  font-weight: 600;
  margin-right: 16px;
  color: ${({ theme }) => theme.primary.black};
`;

export const LoginButton = styled(Link)`
  color: ${({ theme }) => theme.primary.black};
  background-color: ${({ theme }) => theme.primary.white};
  border-radius: 1.4rem;
  border: none;
  padding: 0.68rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  align-self: center;
  text-decoration: none;
`;
