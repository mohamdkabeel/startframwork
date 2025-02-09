import React from 'react';
import About from './components/About/About'
import Portfolio from './components/portfolio/Portfolio'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact';
import Error from '@/components/Error/Error';


let x = createBrowserRouter([
  {
    path: '', element: <Layout />, errorElement: <Error />, children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> }
    ]
  },
])


export default function App() {

  return <>
    <RouterProvider router={x} ></RouterProvider>
  </>
}
