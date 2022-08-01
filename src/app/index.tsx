/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalStyle } from 'styles/global-styles';

import { useTranslation } from 'react-i18next';

import { AuthContextProvider } from './components/Auth/AuthContext';
import { useAuthProvider } from './hooks/useAuthProvider';
import ThemeProvider from './themes/ThemeProvider';
import InputField from './components/Form/InputField';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  const { i18n } = useTranslation();
  const authProvider = useAuthProvider();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ThemeProvider>
          <Helmet
            titleTemplate="%s - React Boilerplate"
            defaultTitle="React Boilerplate"
            htmlAttributes={{ lang: i18n.language }}
          >
            <meta name="description" content="A React Boilerplate application" />
          </Helmet>

          <AuthContextProvider authProvider={authProvider}>
            <Routes></Routes>
            <GlobalStyle />

            <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
          </AuthContextProvider>
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
