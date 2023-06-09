import { useDispatch } from 'react-redux';
import { registration } from 'redux/auth/operations';
import {
  ButtonRegister,
  FormRegister,
  InputRegister,
  LabelRegister,
} from './RegisterForm.styled';

const RegisterForm = () => {
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
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <LabelRegister htmlFor="registUsername">Username</LabelRegister>
      <InputRegister type="text" id="registUsername" name="name" />
      <LabelRegister htmlFor="registEmail">Email</LabelRegister>
      <InputRegister type="email" id="registEmail" name="email" />
      <LabelRegister htmlFor="registPassword">Password</LabelRegister>
      <InputRegister
        type="password"
        id="registPassword"
        name="password"
        autoComplete="off"
      />

      <ButtonRegister type="submit">Sign up</ButtonRegister>
    </FormRegister>
  );
};

export default RegisterForm;
