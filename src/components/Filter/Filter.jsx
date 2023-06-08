import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import {
  StyledFilter,
  StyledLabel,
  FilterWrapper,
  ContactsTitle,
} from './Filter.styled';

const Filter = ({ title }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <ContactsTitle>{title}</ContactsTitle>
      <FilterWrapper>
        <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
        <StyledFilter id="filter" type="text" onChange={handleChange} />
      </FilterWrapper>
    </>
  );
};

export default Filter;
