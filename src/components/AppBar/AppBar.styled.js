import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const AppBarWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
  border-bottom: 1px solid black;
`;

export const NavItem = styled(NavLink)`
  text-decoration: none;
  padding: 4px 20px;
  color: black;
  font-size: 30px;
  :first-child {
    margin-right: 10px;
  }
  &.active {
    color: orangered;
  }
  :hover:not(.active) {
    color: orangered;
    transition: ease-in-out 250ms;
  }
`;
