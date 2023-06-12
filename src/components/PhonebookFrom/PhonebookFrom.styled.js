import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  max-width: 385px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledInput = styled.input`
  height: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 8px;

  :hover,
  :focus {
    border-color: #f6ad55;
    outline: none;
    transition: ease-in-out 250ms;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 500;
`;

export const StyledButton = styled.button`
  padding: 8px;
  margin-top: 10px;
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

export const PhonebookTitle = styled.h2`
  max-width: 385px;
  margin-left: auto;
  margin-right: auto;
`;
