import { useSelector } from 'react-redux';

import BaseLayout from 'layouts/BaseLayout';

import Login from 'features/Login';
import Register from 'features/Register';
import Redirect from 'utils/redirect';
const Home = () => {
  const { user } = useSelector((state) => state.user);
  const { loggedUser } = useSelector((state) => state.loggedUser);

  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='base-layout__home'
    >
      {!user && <Login />}
      {user && loggedUser?.name?.length > 0 && <Register />}
      {user && loggedUser && <Redirect to='/profile' />}
    </BaseLayout>
  );
};

export default Home;
