import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import ErrorPage from './components/ErrorPage';
import CatFactList from './components/CatFactList';
import CatFactDetail from './components/CatFactDetail';

const router = createBrowserRouter([
  {
    element: <Header/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <CatFactList />,
      },
      {
        path: "/catfact/:id",
        element: <CatFactDetail />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)