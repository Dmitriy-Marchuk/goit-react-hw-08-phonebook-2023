import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import {
  FilterInput,
  FilterInputLabel,
  FilterWrapper,
  FilterTitle,
} from './Filter.styled';

const Filter = ({ title }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <FilterTitle>{title}</FilterTitle>
      <FilterWrapper>
        <FilterInputLabel htmlFor="filter">
          Find contacts by name
        </FilterInputLabel>
        <FilterInput id="filter" type="text" onChange={handleChange} />
      </FilterWrapper>
    </>
  );
};

export default Filter;
