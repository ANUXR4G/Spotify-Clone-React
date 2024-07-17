import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Components/sidebar';
import Footer from './Components/footer';

function Layout() {

  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='w-full'>
        <Outlet />
        <Footer />
      </div>
    </div>

  )
}

export default Layout;
