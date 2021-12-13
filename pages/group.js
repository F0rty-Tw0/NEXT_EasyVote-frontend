import { useState } from 'react';
import BaseLayout from 'layouts/BaseLayout';
import { FaUsers, FaRegComments, FaHistory } from 'react-icons/fa';
import People from '@/People';
import Posts from '@/Posts';
import History from '@/History';

const Group = () => {
  const [activeTab, setActiveTab] = useState('people');
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='sections__group'
    >
      <div className='page'>
        <div className='page__wrapper'>
          <section className='groups__section'>
            <h2 className='section__title'>Group</h2>
            <div className='groups__menu'>
              <div
                className='menu__button nav__link active'
                onClick={() => setActiveTab('people')}
              >
                <FaUsers className='menu__icon' />
                <p className='menu__name'>People</p>
              </div>
              <div
                className=' nav__link menu__button'
                onClick={() => setActiveTab('posts')}
              >
                <FaRegComments className='menu__icon' />
                <p className='menu__name'>Posts</p>
              </div>
              <div
                className='menu__button nav__link'
                onClick={() => setActiveTab('history')}
              >
                <FaHistory className='menu__icon' />
                <p className='menu__name'>History</p>
              </div>
            </div>
            {activeTab === 'people' && <People />}
            {activeTab === 'posts' && <Posts />}
            {activeTab === 'history' && <History />}
          </section>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Group;
