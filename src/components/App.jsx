import React, { useEffect } from 'react';
import PhonebookForm from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { AppContainer } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { getError, getIsLoading } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <AppContainer>
      <div>
        <PhonebookForm title="Phonebook" />
        <Filter title="Contacts" />
        {isLoading && !error && <b>Request in progress...</b>}
        <Contacts />
      </div>
    </AppContainer>
  );
};

export default App;
