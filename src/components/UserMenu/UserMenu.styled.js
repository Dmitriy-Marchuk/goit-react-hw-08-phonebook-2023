import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 500;
  @media screen and (max-width: 700px) {
    p {
      display: none;
    }
  }
`;

export const LogoutButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  color: #fff;
  background-color: #3182ce;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #f6ad55;
    transition: ease-in-out 250ms;
  }
`;
