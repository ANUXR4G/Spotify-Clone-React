import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Components/sidebar';

function Layout() {

  return (
   <div className='flex flex-row'>
    <Sidebar/>
      <div className='w-full'>
      <Outlet/>
      </div>
      </div>
  )
}

export default Layout;
