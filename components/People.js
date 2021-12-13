import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const People = () => {
  const [search, setSearch] = useState('');

  return (
    <>
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
        <span className='input--focus' placeholder='Search people...'></span>
      </div>
    </>
  );
};

export default People;
