import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;
export const StyledFilter = styled.input`
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
