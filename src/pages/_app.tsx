import '../assets/styles/main.css';
import '../assets/styles/chrome-bug.css';
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/dist/client/router';
import { handlePageView } from '../utils/ga';
import { ManagedContext } from '../context/ManagedContext';
import SeoHead from '../components/seo/SeoHead';
import AutoSave from '../components/utils/AutoSave';

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      handlePageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <SeoHead />
      <ManagedContext>
        <AutoSave />
        <Component {...pageProps} />
      </ManagedContext>
    </>
  );
};

export default App;
