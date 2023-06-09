import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  ButtonLogin,
  FormLogin,
  InputLogin,
  LabelLogin,
} from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <FormLogin onSubmit={handleSubmit}>
        <LabelLogin htmlFor="loginEmail">Email </LabelLogin>
        <InputLogin id="loginEmail" type="email" name="email" />
        <LabelLogin htmlFor="loginPass">Password</LabelLogin>
        <InputLogin
          id="loginPass"
          type="password"
          name="password"
          autoComplete="off"
        />
        <ButtonLogin type="submit">Log In</ButtonLogin>
      </FormLogin>
    </>
  );
};

export default LoginForm;
