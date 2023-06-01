import React from 'react';
import PhonebookForm from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { AppContainer } from './App.styled';

const App = () => {
  return (
    <AppContainer>
      <div>
        <PhonebookForm title="Phonebook" />
        <Filter title="Contacts" />
        <Contacts />
      </div>
    </AppContainer>
  );
};

export default App;
