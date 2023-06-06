import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from 'pages/HomePage';
import ContactsPage from 'pages/ContactsPage';
import RegistrationPage from 'pages/RegistrationPage';
import LoginPage from 'pages/LoginPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="*" element={<div>NO PAGE</div>} />
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
