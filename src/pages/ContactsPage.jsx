import { AppContainer } from 'components/App.styled';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import PhonebookForm from 'components/Phonebook/Phonebook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectError, selectIsLoading } from 'redux/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
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

export default ContactsPage;
