import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 20px;
`;
export const FilterInput = styled.input`
  width: 330px;
  height: 100%;
  padding: 5px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
  border-radius: 8px;
  :hover,
  :focus {
    border-color: #f6ad55;
    outline: none;
    transition: ease-in-out 250ms;
  }
`;

export const FilterInputLabel = styled.label`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3px;
  font-weight: 700;
`;

export const FilterTitle = styled.h2`
  max-width: 385px;
  margin-left: auto;
  margin-right: auto;
  border-bottom: 1px solid black;
`;
