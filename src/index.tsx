import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from 'react-query';
import RootLayout from './RootLayout';
import { BrowserRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Routes from './Routes';
import './index.css';
import NavbarNavigation from './components/Navbar/NavbarNavigatio';
import Footer from '../src/components/Footer/Footer';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Helmet>
          <title>ChapterOne</title>
        </Helmet>
        <RootLayout> 
          <NavbarNavigation />
          <Routes />
          <Footer />
        </RootLayout>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);
