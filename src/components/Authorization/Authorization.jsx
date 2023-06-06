import { NavItem } from 'components/AppBar/AppBar.styled';
import { AuthWrapper } from './Authorization.styled';

const Authorization = () => {
  return (
    <AuthWrapper>
      <NavItem to="/registration">Registration</NavItem>
      <NavItem to="/login">Login</NavItem>
    </AuthWrapper>
  );
};

export default Authorization;
