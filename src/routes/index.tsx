import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import { catFactLoader } from '@/loaders/CatFactLoader';
import { catDetailLoader } from '@/loaders/CatDetailLoader';
import { testDetailLoader } from '@/loaders/testLoader';

const PageLayout = React.lazy(() => import('@/components/PageLayout'));
const CatFactList = React.lazy(() => import('@/components/CatFactList'));
const CatFactDetail = React.lazy(() => import('@/components/CatFactDetail'));
const ErrorPage = React.lazy(() => import('@/components/ErrorPage'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<PageLayout />}>
      <Route index element={<CatFactList />} loader={catFactLoader} />
      <Route
        path='fact/:id'
        element={<CatFactDetail />}
        errorElement={<ErrorPage />}
        loader={testDetailLoader}
      />
      <Route path='*' element={<ErrorPage />} />
    </Route>,
  ),
);

export default router;
