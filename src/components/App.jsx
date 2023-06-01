import React, { useEffect } from 'react';
import PhonebookForm from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { AppContainer } from './App.styled';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
