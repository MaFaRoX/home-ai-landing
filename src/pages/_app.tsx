import type { AppProps } from 'next/app';
import '../index.css';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}


