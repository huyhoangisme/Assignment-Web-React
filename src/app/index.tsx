/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';
import { AuthContextProvider } from './components/Auth/AuthContext';
import PrivateOutlet from './components/Auth/PrivateOutlet';
import { Layout } from './layouts/Layout';
import { LayoutDashBoard } from './layouts/LayoutDashBoard';
import { ChangePasswordPage } from './pages/Account/features/ChangePassword/Loadable';
import { InformationPage } from './pages/Account/features/Information/Loadable';
import { UpdateProfilePage } from './pages/Account/features/UpdateProfile/Loadable';
import { AccountPage } from './pages/Account/Loadable';
import { ModalCartPage } from './pages/Cart/features/ModalCart/Loadable';
import { CartPage } from './pages/Cart/Loadable';
import { CheckoutPage } from './pages/Checkout/Loadable';
import { ContactPage } from './pages/Contact/Loadable';
import { DetailProductPage } from './pages/Home/features/DetailProduct/Loadable';
import { HomePage } from './pages/Home/Loadable';
import { IntroducePage } from './pages/Introduce/Loadable';
import { authProvider } from './pages/Login/components/AuthProvider';
import { LoginPage } from './pages/Login/Loadable';
import { RegisterPage } from './pages/Register/Loadable';
import { UsersPage } from './pages/Users/Loadable';
import ThemeProvider from './themes/ThemeProvider';

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
                  <Route path="product/cart" element={<ModalCartPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/gioithieu" element={<IntroducePage />} />
                <Route path="/lienhe" element={<ContactPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/account" element={<AccountPage />}>
                  <Route index element={<InformationPage />} />
                  <Route path="changepassword" element={<ChangePasswordPage />} />
                  <Route path="updateprofile" element={<UpdateProfilePage />} />
                </Route>
              </Route>
              <Route path="/checkout/:id" element={<PrivateOutlet />}>
                <Route path="/checkout/:id" element={<CheckoutPage />} />
              </Route>
              <Route path="/dashboard" element={<LayoutDashBoard />}>
                <Route path="/dashboard" element={<UsersPage />}></Route>
                <Route path="product" element={<UsersPage />} />
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
