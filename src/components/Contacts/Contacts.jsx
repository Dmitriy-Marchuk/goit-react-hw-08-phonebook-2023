import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactElement from 'components/ContactElement/ContactElement';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  const queryName = useSelector(getFilter).filter.toLowerCase().trim();

  const filteredContacts = () => {
    return contacts.filter(
      contact =>
        contact.name.toLowerCase().trim().includes(queryName) ||
        contact.number.toLowerCase().trim().includes(queryName)
    );
  };

  return (
    <ul>
      {filteredContacts().map(contact => (
        <ContactElement key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default Contacts;
