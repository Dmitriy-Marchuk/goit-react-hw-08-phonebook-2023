import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 20px;
`;
export const StyledFilter = styled.input`
  width: 250px;
  height: 100%;
  padding: 5px;
  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 10px;
  :hover,
  :focus {
    border-color: #f6ad55;
    outline: none;
    transition: ease-in-out 250ms;
  }
`;

export const StyledLabel = styled.label`
  margin-bottom: 5px;
  font-weight: 500;
`;

export const ContactsTitle = styled.h2`
  border-bottom: 1px solid black;
`;
