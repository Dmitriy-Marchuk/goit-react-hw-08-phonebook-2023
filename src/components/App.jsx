import React, { useEffect } from 'react';
import PhonebookForm from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { AppContainer } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';
import { Route, Router, Routes } from 'react-router-dom';
import Layout from './Layout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<div>Homepage Page</div>} />
        <Route path="/register" element={<div>Register Page</div>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/contacts" element={<div>Contacts Page</div>} />
      </Route>
    </Routes>
  );
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  // return (
  //   <AppContainer>
  //     <div>
  //       <PhonebookForm title="Phonebook" />
  //       <Filter title="Contacts" />
  //       {isLoading && !error && <b>Request in progress...</b>}
  //       <Contacts />
  //     </div>
  //   </AppContainer>
  // );
};

export default App;
