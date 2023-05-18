import React from 'react';
import { StyledFilter, StyledLabel, FilterWrapper } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

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
