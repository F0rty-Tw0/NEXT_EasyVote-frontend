import Image from 'next/image';
import BaseLayout from 'layouts/BaseLayout';
import { BiBell } from 'react-icons/bi';
const Posts = () => {
  return (
    <BaseLayout
      title='Welcome to Easy Vote'
      description='Voting was never that easy before. With Easy Vote you can vote remotely without getting out your comfort zone.'
      classNameName='sections__posts'
    >
      <div className='page'>
        <div className='page__wrapper'>
          <section className='posts__section'>
            <div className='group__header'>
              <div className='group__title'>Today</div>
              <div className='group__date'>Monday, Dec 13, 2021</div>
            </div>
            <div className='posts__grid'>
              <div className='avatar'>
                <Image
                  src='/favicon.ico'
                  width={30}
                  height={30}
                  alt='Avatar image'
                />
              </div>
              <div className='posts__card'>
                <div className='posts__header'>
                  <BiBell className='post__icon' />
                  <div className='posts__title'>Art liked your post</div>
                  <div className='posts__time'>9:00am</div>
                </div>
                <div className='posts__content'>
                  The comment of you and a dog was liked by Art.
                </div>
              </div>
              <div className='avatar'>
                <Image
                  src='/favicon.ico'
                  width={30}
                  height={30}
                  alt='Avatar image'
                />
              </div>
              <div className='posts__card'>
                <div className='posts__header'>
                  <BiBell className='post__icon' />
                  <div className='posts__title'>Art liked your comment</div>
                  <div className='posts__time'>9:00am</div>
                </div>
              </div>
              <div className='avatar'>
                <Image
                  src='/favicon.ico'
                  width={30}
                  height={30}
                  alt='Avatar image'
                />
              </div>
              <div className='posts__card'>
                <div className='posts__header'>
                  <BiBell className='post__icon' />
                  <div className='posts__title'>Art liked your comment</div>
                  <div className='posts__time'>9:00am</div>
                </div>
                <div className='posts__content'>
                  The comment of you and a dog was liked by Art. Lorem, ipsum
                  dolor sit amet consectetur adipisicing elit. Accusamus sit
                  doloremque odit magni eos soluta neque sunt, autem maxime
                  tempore!
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Posts;
