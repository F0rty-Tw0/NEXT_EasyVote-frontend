import BaseLayout from 'layouts/BaseLayout';

const Messages = () => {
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='sections__messages'
    >
      <h2 className='section__title'>Messages</h2>
    </BaseLayout>
  );
};

export default Messages;
