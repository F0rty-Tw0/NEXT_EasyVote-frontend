import BaseLayout from 'layouts/BaseLayout';

const About = () => {
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='base-layout__about'
    >
      <h2 className='section__title'>About</h2>
    </BaseLayout>
  );
};

export default About;
