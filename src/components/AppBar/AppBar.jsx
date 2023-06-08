import { useAuth } from 'hooks/useAuth';
import Authorization from 'components/Authorization/Authorization';
import { Navigation } from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { AppBarWrapper } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBarWrapper>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <Authorization />}
    </AppBarWrapper>
  );
};
