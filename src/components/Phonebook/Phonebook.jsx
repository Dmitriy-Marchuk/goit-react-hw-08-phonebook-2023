import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
} from './Phonebook.styled';
import { useState } from 'react';
import { nanoid } from 'nanoid';

export const PhonebookForm = ({ onSubmit, title }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const handleInputChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      <h2>{title}</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor={nameInputId}>Name</StyledLabel>
        <StyledInput
          name="name"
          id={nameInputId}
          type="text"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <StyledLabel htmlFor={numberInputId}>Number</StyledLabel>
        <StyledInput
          name="number"
          id={numberInputId}
          type="tel"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <StyledButton type="submit">Add contact</StyledButton>
      </StyledForm>
    </>
  );
};

export default PhonebookForm;
