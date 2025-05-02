import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { Lexend } from 'next/font/google';
import '../app/globals.css';

// Import Lexend font with all weights and latin subset
const lexendFont = Lexend({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <main className={lexendFont.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
