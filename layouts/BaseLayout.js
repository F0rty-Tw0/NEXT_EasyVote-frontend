import Head from 'next/head';
import NavBar from 'components/shared/NavBar';
import Loading from 'components/shared/Loading';

const BaseLayout = ({ className, title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`base-layout ${className}`}>
        <div className='base-layout__wrapper'>
          <NavBar className='base-layout__nav' />
          <Loading className='base-layout__loading' />
          <section className='base-layout__content'>{children}</section>
        </div>
      </main>
    </>
  );
};
export default BaseLayout;
