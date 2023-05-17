import React from 'react';
import { ContactsElement, DeleteButton } from './Contacts.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const Contacts = ({ onDeleteContact }) => {
  const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter).filter.toLowerCase().trim();

  // const filteredContacts = () => {
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(filter)
  //   );
  // };

  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactsElement key={id}>
          <div>
            <p>{name}:</p>
            <p>{number}</p>
          </div>
          <DeleteButton onClick={() => onDeleteContact(id)}>
            Delete contact
          </DeleteButton>
        </ContactsElement>
      ))}
    </ul>
  );
};

export default Contacts;
