import BaseLayout from 'layouts/BaseLayout';

const Posts = () => {
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='sections__posts'
    >
      <h2 className='section__title'>Posts</h2>
    </BaseLayout>
  );
};

export default Posts;
