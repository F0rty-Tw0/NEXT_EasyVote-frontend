import BaseLayout from 'layouts/BaseLayout';
import Login from '@/Login';
import Register from '@/Register';
const Home = () => {
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='base-layout__home'
    >
      <Login />
    </BaseLayout>
  );
};

export default Home;
