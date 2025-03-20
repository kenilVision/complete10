import React from 'react'
import Table from '../Component/Home/Table'
import Modal from '../Component/Home/Modal'
import Search from '../Component/Home/Search'
import Page from '../Component/Home/Page'
function Home() {
  return (
    <>
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center  px-6 py-8 mx-auto min-h-screen w-full lg:py-0">
        <Search />
      <div className="w-full max-w-xxl bg-white rounded-lg shadow dark:border  dark:bg-gray-800 dark:border-gray-700 mt-10  ">
      <Table />

       </div>
       <Modal/> 
       <Page />
       </div>
       
    </section>
    
   
    </>
  )
}

export default Home
