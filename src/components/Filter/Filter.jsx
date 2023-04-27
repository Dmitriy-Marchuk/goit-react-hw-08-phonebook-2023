import React from 'react';
import { StyledFilter, StyledLabel, FilterWrapper } from './Filter.styled';

const Filter = ({ value, onChange, title }) => (
  <>
    <h2>{title}</h2>
    <FilterWrapper>
      <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
      <StyledFilter id="filter" type="text" value={value} onChange={onChange} />
    </FilterWrapper>
  </>
);

export default Filter;
