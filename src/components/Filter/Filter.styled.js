import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 20px;
`;
export const StyledFilter = styled.input`
  width: 250px;
  height: 100%;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 20px;
  :hover,
  :focus {
    border-color: tomato;
    outline: none;
  }
`;

export const StyledLabel = styled.label`
  font-weight: 500;
`;
