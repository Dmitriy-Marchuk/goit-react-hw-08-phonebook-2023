import styled from 'styled-components';

export const ContactElementStyled = styled.li`
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
  margin-left: 20px;
  padding: 5px 10px;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  color: #fff;
  background-color: #3182ce;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #f6ad55;
    transition: ease-in-out 250ms;
  }
`;
