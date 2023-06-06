import { useAuth } from 'hooks/useAuth';

const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div>
      <p>{user.name}</p>
      <button>Logout</button>
    </div>
  );
};

export default UserMenu;
