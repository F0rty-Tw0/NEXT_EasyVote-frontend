import BaseLayout from 'layouts/BaseLayout';

const Home = () => {
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='base-layout__home'
    >
      <h2 className='section__title'>Home</h2>
    </BaseLayout>
  );
};

export default Home;
