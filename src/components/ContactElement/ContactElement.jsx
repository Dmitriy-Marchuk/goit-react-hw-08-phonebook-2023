import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';

const { DeleteButton } = require('components/Contacts/Contacts.styled');
const { ContactElementStyled } = require('./ContactElement.styled');

const ContactElement = ({ contact }) => {
  const { name, number } = contact;

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <ContactElementStyled>
      <div>
        <p>{name}:</p>
        <p>{number}</p>
      </div>
      <DeleteButton onClick={handleDelete}>Delete contact</DeleteButton>
    </ContactElementStyled>
  );
};

export default ContactElement;
