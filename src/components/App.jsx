import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import PhonebookForm from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { AppContainer } from './App.styled';

const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(localStorage.getItem('contacts')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const contactsNames = contacts.map(contact => contact.name);
    const contactsNumbers = contacts.map(contact => contact.number);

    if (
      contactsNames.find(
        contactsName => contactsName.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      return alert(`${data.name} is already in contacts`);
    }
    if (
      contactsNumbers.find(
        contactsNumber =>
          contactsNumber.toLowerCase() === data.number.toLowerCase()
      )
    ) {
      return alert(`${data.number} is already in contacts`);
    }

    setContacts([
      {
        id: nanoid(),
        name: data.name,
        number: data.number,
      },
      ...contacts,
    ]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const normalizedFilter = filter.toLowerCase();
  const getVisibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <AppContainer>
      <div>
        <PhonebookForm onSubmit={addContact} title="Phonebook" />
        <Filter value={filter} onChange={changeFilter} title="Contacts" />
        <Contacts
          contacts={getVisibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    </AppContainer>
  );
};

export default App;
