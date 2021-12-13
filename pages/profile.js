import BaseLayout from 'layouts/BaseLayout';
import {
  BiArrowBack,
  BiCalendar,
  BiBriefcaseAlt,
  BiDotsVerticalRounded,
  BiCheck,
  BiFile,
} from 'react-icons/bi';

const Profile = () => {
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='section__profile'
    >
      <div className='page'>
        <div className='page__wrapper'>
          <div className='profile__top-icons'>
            <BiArrowBack />
            <div>
              <BiDotsVerticalRounded />
            </div>
          </div>

          <div className='profile'>
            <div className='profile__thumbnail'>A</div>
            <div className='profile__check'>
              <BiCheck />
            </div>
            <p className='profile__slogan'>
              YOUR NICE SLOGAN YOUR NICE SLOGAN YOUR NICE SLOGAN YOUR NICE
              SLOGAN YOUR NICE SLOGAN
            </p>
            <h3 className='profile__name'>YOUR NICE NAME</h3>
            <p className='profile__email'>YOUR NICE EMAIL</p>
            <div className='profile__address'>
              <span className='profile__address--municipality'>
                YOUR MUNICIPALITY
              </span>

              <button className='profile__zip'>ZIPCODE</button>
              <span className='profile__address--street'>YOUR ADDRESS</span>
            </div>
          </div>

          <div className='profile__icons'>
            <div>
              <div className='icon'>
                <BiBriefcaseAlt />
              </div>
              <h4>FF</h4>
              <p className='icon__title'>PARTY</p>
            </div>
            <div>
              <div className='icon'>
                <BiFile />
              </div>
              <h4>51525</h4>
              <p className='icon__title'>CPR</p>
            </div>
            <div className='icon__container'>
              <div className='icon'>
                <BiCalendar />
              </div>
              <h4>12/23/23</h4>
              <p className='icon__title'>BDAY</p>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Profile;
