import React from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from './components/Form/Form';
import FormFetch from './components/IssueFetch/IssueFetch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <><Form/></>,
  },
  {
    path: '/issues', 
    element : <><FormFetch/></>
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
