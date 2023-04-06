import { AppContainer } from "./App.styled";
import { PhonebookForm } from "./Phonebook/Phonebook";

export const App = () => {
//   state = {
//   contacts: [],
//   name: ''
// }
  return (
    <AppContainer>
      <PhonebookForm title="Phonebook"/>
    </AppContainer>
  );
};
