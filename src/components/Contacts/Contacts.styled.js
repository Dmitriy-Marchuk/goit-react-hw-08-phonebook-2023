import styled from 'styled-components';

export const ContactsElement = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  div {
    display: inherit;
  }
  p {
    :first-child {
      margin-right: 10px;
    }
  }
`;

export const DeleteButton = styled.button`
  font-size: 15px;
  padding: 5px 10px;
  border: 1px solid black;
  border-radius: 8px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: tomato;
    color: #fff;
    outline: none;
  }
`;
