import BaseLayout from 'layouts/BaseLayout';
import { MdHowToVote } from 'react-icons/md';
const Parties = () => {
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      className='sections__parties'
    >
      <div className='page'>
        <div className='page__wrapper'>
          <section className='parties__section'>
            <div className='parties__header'>
              <div className='parties__icon'>
                <MdHowToVote />
              </div>
              <h1 className='parties__title'>
                <span className='parties__title--top'>PARTIES</span>
                <span className='parties__title--bottom'>Leaderboard</span>
              </h1>
            </div>
            <div className='parties__profiles'>
              <div className='parties__profile'>
                <div className='parties__picture'>M</div>
                <div className='parties__name'>
                  <p>Mark Zuckborg</p> <p className='parties__vote'>VOTE</p>
                </div>
                <span className='parties__value'>35.7</span>
              </div>

              <div className='parties__profile'>
                <div className='parties__picture'>D</div>
                <div className='parties__name'>
                  <p>Dustin Moskovitz</p> <p className='parties__vote'>VOTE</p>
                </div>
                <span className='parties__value'>9.9</span>
              </div>

              <div className='parties__profile'>
                <div className='parties__picture'>H</div>
                <div className='parties__name'>
                  <p>Hellen Holmes</p> <p className='parties__vote'>VOTE</p>
                </div>
                <span className='parties__value'>4.5</span>
              </div>

              <div className='parties__profile'>
                <div className='parties__picture'>E</div>
                <div className='parties__name'>
                  <p>Evan Spiegel</p> <p className='parties__vote'>VOTE</p>
                </div>
                <span className='parties__value'>2.1</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Parties;
