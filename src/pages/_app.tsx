import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Provider } from 'jotai';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/constants/styles/globalStyle';
import { theme } from '@/constants/styles/theme';
import 'public/assets/fonts/font.css';

import Navigation from '../components/common/navigation/navigation';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <Navigation />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default MyApp;
