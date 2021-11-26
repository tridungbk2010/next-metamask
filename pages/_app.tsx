import '../styles/globals.css';
import '../styles/animation.css';
import { DefaultSeo } from 'next-seo';
import type { AppProps } from 'next/app';
import { EthereumProvider } from '../components/EthereumConext';
import { Toaster } from 'react-hot-toast';
import SEO from '../next-seo.config';
import Popup from '../components/Popup';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Popup />
      <EthereumProvider>
        <Component {...pageProps} />
        <Toaster />
      </EthereumProvider>
    </>
  );
}
export default MyApp;
