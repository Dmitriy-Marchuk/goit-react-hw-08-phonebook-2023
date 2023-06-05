import { NavItem } from 'components/AppBar/AppBar.styled';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/contacts">Contacts</NavItem>
      {/* {isLoggedIn && (<NavItem to="/contacts">Contacts</NavItem>)} */}
    </nav>
  );
};
