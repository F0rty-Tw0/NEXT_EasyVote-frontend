import { useState } from 'react';
import BaseLayout from 'layouts/BaseLayout';
import { FaUsers, FaRegComments, FaHistory, FaSearch } from 'react-icons/fa';
const Group = () => {
  const [search, setSearch] = useState('');

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
              <div className='menu__button active'>
                <FaUsers className='menu__icon' />
                <p className='menu__name'>People</p>
              </div>
              <div className='menu__button'>
                <FaRegComments className='menu__icon' />
                <p className='menu__name'>Posts</p>
              </div>
              <div className='menu__button'>
                <FaHistory className='menu__icon' />
                <p className='menu__name'>History</p>
              </div>
            </div>
            <div className='people'>
              <div className='people__avatar'>A</div>
              <div className='people__info'>
                <span className='people__name'>Artiom Tofan</span>
                <span className='people__email'>art@gmail.com</span>
              </div>
              <div className='people__status online' />
            </div>
            <div className='people'>
              <div className='people__avatar'>N</div>
              <div className='people__info'>
                <span className='people__name'>Nikolai Lenander</span>
                <span className='people__email'>niko@gmail.com</span>
              </div>
              <div className='people__status offline' />
            </div>
            <div className='people'>
              <div className='people__avatar'>P</div>
              <div className='people__info'>
                <span className='people__name'>Pawel Stepien</span>
                <span className='people__email'>pawel@gmail.com</span>
              </div>
              <div className='people__status' />
            </div>

            <div className='groups__search input__wrapper'>
              <FaSearch
                className='search__icon'
                onClick={() => console.log(search)}
              />
              <input
                className={`input search__input ${
                  search.length > 0 ? 'input--filled' : ''
                }`}
                type='text'
                name='search'
                onChange={(event) => setSearch(event.target.value)}
              />
              <span
                className='input--focus'
                placeholder='Search people...'
              ></span>
            </div>
          </section>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Group;
