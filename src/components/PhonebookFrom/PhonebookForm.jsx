import { useDispatch, useSelector } from 'react-redux';
import {
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledButton,
  PhonebookTitle,
} from './PhonebookFrom.styled';
import { addContact } from 'redux/contacts/operations';
import { selectContacts } from 'redux/contacts/selectors';

export const PhonebookForm = ({ title }) => {
  const dispatch = useDispatch();
  const getContactsStore = useSelector(selectContacts);

  const handleSubmit = e => {
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const contact = { name, number };

    e.preventDefault();
    dispatch(addContact(contact));

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
      <PhonebookTitle>{title}</PhonebookTitle>
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
