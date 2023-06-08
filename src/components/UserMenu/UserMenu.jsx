import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LogoutButton, UserMenuWrapper } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <UserMenuWrapper>
      <p>Welcome, {user.name}</p>
      <LogoutButton onClick={handleLogOut}>Logout</LogoutButton>
    </UserMenuWrapper>
  );
};

export default UserMenu;
