import React, { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Layout from './Layout';
import NoPage from './NoPage/NoPage';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const PhonebookPage = lazy(() => import('../pages/Phonebook'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  useEffect(() => {
    if (location.pathname === '/goit-react-hw-08-phonebook-2023') {
      navigate('/');
    }
  }, [navigate, location.pathname]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={RegisterPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={PhonebookPage} redirectTo="/login" />
          }
        />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default App;
