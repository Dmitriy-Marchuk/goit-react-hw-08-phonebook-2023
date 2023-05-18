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
