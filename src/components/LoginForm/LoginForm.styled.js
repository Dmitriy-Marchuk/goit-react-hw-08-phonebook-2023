import styled from 'styled-components';

export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  max-width: 392px;
  border: 1px solid black;
  border-radius: 15px;
`;

export const LabelLogin = styled.label`
  font-weight: 500;
`;

export const ButtonLogin = styled.button`
  margin-top: 10px;
  padding: 8px;
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

export const InputLogin = styled.input`
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
