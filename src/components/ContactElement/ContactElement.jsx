import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { ContactElementStyled, DeleteButton } from './ContactElement.styled';

const ContactElement = ({ contact }) => {
  const { name, number, id } = contact;

  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

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

ContactElement.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default ContactElement;
