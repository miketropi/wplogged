import { AppProvider } from '../context/state';
import '../styles/main.scss';

function MyApp({ Component, pageProps }) {
  return <AppProvider>
    <Component {...pageProps} />
  </AppProvider>
}

export default MyApp
