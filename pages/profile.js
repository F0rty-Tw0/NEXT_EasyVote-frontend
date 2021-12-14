import { useDispatch, useSelector } from 'react-redux';
import BaseLayout from 'layouts/BaseLayout';
import WithAuth from '@/hoc/withAuth';
import {
  BiArrowBack,
  BiCalendar,
  BiBriefcaseAlt,
  BiDotsVerticalRounded,
  BiCheck,
  BiFile,
} from 'react-icons/bi';
import deAuthenticateUser from 'features/Login/deAuthenticateUser';

const Profile = () => {
  const dispatch = useDispatch();
  const { loggedUser } = useSelector((state) => state.loggedUser);
  const logout = () => {
    dispatch(deAuthenticateUser());
  };

  return (
    <WithAuth>
      <BaseLayout
        title='Welcome to Easy Vote'
        description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
        className='section__profile'
      >
        <div className='page'>
          <div className='page__wrapper'>
            <div className='profile__top-icons'>
              <BiArrowBack />
              <h2 className='section__title'>Profile</h2>
              <BiDotsVerticalRounded onClick={logout} />
            </div>

            <div className='profile'>
              <div className='profile__thumbnail'>
                {loggedUser?.name.charAt(0)}
              </div>
              <div className='profile__check'>
                <BiCheck />
              </div>
              <p className='profile__slogan'>{loggedUser?.slogan}</p>
              <h3 className='profile__name'>{loggedUser?.name}</h3>
              <p className='profile__email'>{loggedUser?.email}</p>
              <div className='profile__address'>
                <span className='profile__address--municipality'>
                  {loggedUser?.municipality.name}
                </span>

                <button className='profile__zip'>{loggedUser?.zip}</button>
                <span className='profile__address--street'>
                  {loggedUser?.address}
                </span>
              </div>
            </div>

            <div className='profile__icons'>
              <div>
                <div className='icon'>
                  <BiBriefcaseAlt />
                </div>
                <h4>{loggedUser?.party.abbreviation}</h4>
                <p className='icon__title'>PARTY</p>
              </div>
              <div>
                <div className='icon'>
                  <BiFile />
                </div>
                <h4>{loggedUser?.cpr}</h4>
                <p className='icon__title'>CPR</p>
              </div>
              <div className='icon__container'>
                <div className='icon'>
                  <BiCalendar />
                </div>
                <h4>{loggedUser?.birthDate}</h4>
                <p className='icon__title'>BDAY</p>
              </div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </WithAuth>
  );
};

export default Profile;
