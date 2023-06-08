import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AppBarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  margin: 0 30px;
  border-bottom: 1px solid black;
`;

export const NavItem = styled(NavLink)`
  padding: 4px 20px;
  color: #3182ce;
  text-decoration: none;
  font-size: 30px;
  :first-child {
    margin-right: 10px;
  }
  &.active {
    color: #f6ad55;
  }
  :hover:not(.active) {
    color: #f6ad55;
    transition: ease-in-out 250ms;
  }
`;
