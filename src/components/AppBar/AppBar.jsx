import Authorization from 'components/Authorization/Authorization';
import { Navigation } from 'components/Navigation/Navigation';
import { AppBarWrapper } from './AppBar.styled';

export const AppBar = () => {
  return (
    <AppBarWrapper>
      <Navigation />
      <Authorization />
    </AppBarWrapper>
  );
};
