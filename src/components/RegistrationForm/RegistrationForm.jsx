import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operations';
import {
  ButtonRegistration,
  FormRegistration,
  InputRegistration,
  LabelRegistration,
} from './RegistrationForm.styled';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      registration({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <FormRegistration onSubmit={handleSubmit} autoComplete="off">
      <LabelRegistration htmlFor="registUsername">Username</LabelRegistration>
      <InputRegistration type="text" id="registUsername" name="name" />
      <LabelRegistration htmlFor="registEmail">Email</LabelRegistration>
      <InputRegistration type="email" id="registEmail" name="email" />
      <LabelRegistration htmlFor="registPassword">Password</LabelRegistration>
      <InputRegistration
        type="password"
        id="registPassword"
        name="password"
        autoComplete="off"
      />

      <ButtonRegistration type="submit">Sign up</ButtonRegistration>
    </FormRegistration>
  );
};

export default RegistrationForm;
