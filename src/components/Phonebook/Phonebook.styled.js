import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  border: 1px solid black;
  border-radius: 15px;
  padding: 20px 200px 40px 20px;
  margin-bottom: 30px;
`;

export const StyledInput = styled.input`
  width: 250px;
  padding: 10px;
  font-size: 20px;
  border-radius: 10px;
  margin-bottom: 20px;

  :hover,
  :focus {
    border-color: tomato;
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  font-size: 30px;
  font-weight: 500;
`;

export const StyledButton = styled.button`
  align-self: flex-start;
  display: flex;
  font-size: 20px;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  :hover,
  :focus {
    background-color: tomato;
    color: #fff;
    outline: none;
  }
`;
