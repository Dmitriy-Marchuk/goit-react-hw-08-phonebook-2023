import React from 'react';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import ContactElement from 'components/ContactElement/ContactElement';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(state => state.filter.filter);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactElement key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default Contacts;
