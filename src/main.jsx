import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Atv1 from './pages/Atv1';
import Atv2 from './pages/Atv2';
import Atv3 from './pages/Atv3';
import Atv4 from './pages/Atv4';
import Atv5 from './pages/Atv5';
import Layout from './Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>
    ,
  },
  {
    path: "/1",
    element: <Layout><Atv1 /></Layout>
    ,
  },
  {
    path: "/2",
    element: <Layout><Atv2 /></Layout>
    ,
  },
  {
    path: "/3",
    element: <Layout><Atv3 /></Layout>
    ,
  },
  {
    path: "/4",
    element: <Layout><Atv4 /></Layout>
    ,
  },
  {
    path: "/5",
    element: <Layout><Atv5 /></Layout>
    ,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
