import Authorization from 'components/Authorization/Authorization';
import { Navigation } from 'components/Navigation/Navigation';
import { AppBarWrapper } from './AppBar.styled';
import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/UserMenu/UserMenu';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarWrapper>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <Authorization />}
    </AppBarWrapper>
  );
};
