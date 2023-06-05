import type { AppProps } from 'next/app';

import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { darkTheme, lightTheme } from '@/themes';

import { UIProvider } from '@/context/ui';

import '@/styles/globals.css';
import { EntriesProvider } from '@/context/entries';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <EntriesProvider>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </EntriesProvider>
    </UIProvider>
  );
}
