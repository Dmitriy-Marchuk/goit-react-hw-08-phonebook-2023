import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { Helmet } from 'react-helmet';

const Registration = () => {
  return (
    <>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegistrationForm />
    </>
  );
};
export default Registration;
