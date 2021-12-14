import '../styles/globals.scss';
import { ThemeProvider } from 'next-themes';
import wrapper from 'redux/store';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default wrapper.withRedux(MyApp);
