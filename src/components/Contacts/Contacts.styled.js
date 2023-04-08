import styled from 'styled-components';

export const ContactsElement = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 25px;
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
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: tomato;
    color: #fff;
    outline: none;
  }
`;
