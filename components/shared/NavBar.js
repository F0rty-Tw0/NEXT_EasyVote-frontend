import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  BiHomeAlt,
  BiBookAlt,
  BiBriefcaseAlt,
  BiMessageSquareDetail,
  BiUser,
} from 'react-icons/bi';

const NavBar = () => {
  const router = useRouter();

  const getActiveLink = (path) => {
    return router.asPath == path ? 'active' : '';
  };

  return (
    <nav className='nav container'>
      <Link passHref href={`/`}>
        <a className='nav__logo'>EasyVote</a>
      </Link>
      <div className='nav__menu' id='nav-menu'>
        <ul className='nav__list'>
          <li className='nav__item'>
            <Link passHref href={`/`}>
              <a className={`nav__link ${getActiveLink('/')}`}>
                <BiHomeAlt className='nav__icon' />
                <span className='nav__name'>Home</span>
              </a>
            </Link>
          </li>
          <li className='nav__item'>
            <Link passHref href={`/about`}>
              <a className={`nav__link ${getActiveLink('/about')}`}>
                <BiUser className='nav__icon' />
                <span className='nav__name'>About</span>
              </a>
            </Link>
          </li>
          <li className='nav__item'>
            <Link passHref href={`/groups`}>
              <a className={`nav__link ${getActiveLink('/groups')}`}>
                <BiBookAlt className='nav__icon' />
                <span className='nav__name'>Groups</span>
              </a>
            </Link>
          </li>
          <li className='nav__item'>
            <Link passHref href={`/parties`}>
              <a className={`nav__link ${getActiveLink('/parties')}`}>
                <BiBriefcaseAlt className='nav__icon' />
                <span className='nav__name'>Parties</span>
              </a>
            </Link>
          </li>
          <li className='nav__item'>
            <Link passHref href={`/messages`}>
              <a className={`nav__link ${getActiveLink('/messages')}`}>
                <BiMessageSquareDetail className='nav__icon' />
                <span className='nav__name'>Messages</span>
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <span className='nav__img'>
        <Image width='23' height='23' src='/favicon.ico' alt='Easy Vote logo' />
      </span>
    </nav>
  );
};

export default NavBar;
