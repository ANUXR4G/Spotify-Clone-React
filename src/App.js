import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/home';
import Layout from './layout';



const route = createBrowserRouter([{

}, {
  path: "/",
  element: <Layout/> ,
  children: [
    {
      path: "/",
      element: <Home/>,
    },
    

  ]
},
])

function App() {

  return (
    <div className='bg-[#121212]'>
        <RouterProvider router={route} />
    </div>
  );
}

export default App;
