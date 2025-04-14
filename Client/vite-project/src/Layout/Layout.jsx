import React from 'react'
import Navbar from './Navbar'
function Layout({children}) {
  return (
    <>  /// commmon layout
    <div>
      <Navbar />
      {children}
      </div>
      </>
  )
}

export default Layout
