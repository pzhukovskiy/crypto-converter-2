import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import ListAbout from './components/about/ListAbout';
import NotFound from './components/notFound/NotFound';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <HashRouter>
      <App/>
    </HashRouter>
  </QueryClientProvider>
);