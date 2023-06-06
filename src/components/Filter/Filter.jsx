import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { StyledFilter, StyledLabel, FilterWrapper } from './Filter.styled';

const Filter = ({ title }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <h2>{title}</h2>
      <FilterWrapper>
        <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
        <StyledFilter id="filter" type="text" onChange={handleChange} />
      </FilterWrapper>
    </>
  );
};

export default Filter;
