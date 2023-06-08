import { AppContainer } from 'components/App.styled';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import PhonebookForm from 'components/PhonebookFrom/PhonebookForm';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';

const Phonebook = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <AppContainer>
      <div>
        <Helmet>
          <title>Contacts</title>
        </Helmet>
        <PhonebookForm title="Phonebook" />
        <Filter title="Contacts" />
        {isLoading && !error && <b>Request in progress...</b>}
        <Contacts />
      </div>
    </AppContainer>
  );
};

export default Phonebook;
