import React, { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import '@/index.css';
import router from '@/routes';

const element = document.getElementById('root');

createRoot(element!).render(
  <React.StrictMode>
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  </React.StrictMode>,
);
