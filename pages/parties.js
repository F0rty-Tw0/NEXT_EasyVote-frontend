import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { MdHowToVote } from 'react-icons/md';
import { setParties } from 'redux/actions';
import WithAuth from '@/hoc/withAuth';
import BaseLayout from 'layouts/BaseLayout';
import { getAllParties } from 'endpoints/parties';

const Parties = () => {
  const dispatch = useDispatch();
  const { parties } = useSelector((state) => state.parties);

  useEffect(() => {
    if (parties.length === 0) {
      const fetchAllParties = async () => {
        try {
          const fetchedParties = await getAllParties();
          console.log(fetchedParties);
          dispatch(setParties(fetchedParties));
        } catch (error) {
          console.log(error);
        }
      };
      fetchAllParties();
    }
  }, [parties, dispatch]);

  return (
    <WithAuth>
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
                {parties?.map((party) => (
                  <div className='parties__profile' key={party.id}>
                    <div className='parties__picture'>{party.abbreviation}</div>
                    <div className='parties__name'>
                      <p>{party.name}</p> <p className='parties__vote'>VOTE</p>
                    </div>
                    <span className='parties__value'>35.7</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </BaseLayout>
    </WithAuth>
  );
};

export default Parties;
