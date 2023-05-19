import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
} from './Phonebook.styled';

export const PhonebookForm = ({ title }) => {
  const dispatch = useDispatch();
  const getContactsStore = useSelector(getContacts);

  const handleSubmit = e => {
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    e.preventDefault();

    if (getContactsStore) {
      getContactsStore.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
        ? alert(name + 'is already in contact book!')
        : dispatch(addContact(name, number));
    }
    form.reset();
  };

  return (
    <>
      <h2>{title}</h2>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="inputName">Name</StyledLabel>
        <StyledInput
          name="name"
          id="inputName"
          type="text"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <StyledLabel htmlFor="inputNumber">Number</StyledLabel>
        <StyledInput
          name="number"
          id="inputNumber"
          type="tel"
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
