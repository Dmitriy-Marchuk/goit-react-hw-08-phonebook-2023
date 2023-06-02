import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import ContactElement from 'components/ContactElement/ContactElement';

const Contacts = () => {
  const contacts = useSelector(getContacts);
  // const queryName = useSelector(getFilter)?.filter?.toLowerCase().trim() || '';

  // const filteredContacts = () => {
  //   if (!contacts || !contacts.items) {
  //     return [];
  //   }

  //   return contacts.items.filter(
  //     contact =>
  //       contact.name.toLowerCase().trim().includes(queryName) ||
  //       contact.number.toLowerCase().trim().includes(queryName)
  //   );
  // };

  return (
    <ul>
      {contacts.map(contact => (
        <ContactElement key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default Contacts;
