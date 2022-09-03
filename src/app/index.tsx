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

import ThemeProvider from './themes/ThemeProvider';
import { Layout } from './layouts/Layout';
import { LoginPage } from './pages/Login/Loadable';
import { RegisterPage } from './pages/Register/Loadable';
import { IntroducePage } from './pages/Introduce/Loadable';
import { ContactPage } from './pages/Contact/Loadable';
import { HomePage } from './pages/Home/Loadable';
import { AuthContextProvider } from './components/Auth/AuthContext';
import { authProvider } from './pages/Login/components/AuthProvider';
import { DetailProductPage } from './pages/Home/features/DetailProduct/Loadable';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export function App() {
  const { i18n } = useTranslation();
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
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<HomePage />}>
                  <Route path="product/:name" element={<DetailProductPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/gioithieu" element={<IntroducePage />} />
                <Route path="/lienhe" element={<ContactPage />} />
              </Route>
            </Routes>
          </AuthContextProvider>
          <GlobalStyle />

          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </ThemeProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
