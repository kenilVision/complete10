import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
function Layout({children}) {
  return (
    <>
    <div>
      <Navbar />
      </div>
      <div className='flex w-full'>
      <Sidebar/>
      {children}
      </div>
      </>
  )
}

export default Layout
