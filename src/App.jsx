import React, { lazy, Suspense } from 'react'
import "./App.css";
import { DNA } from 'react-loader-spinner';

const Content = lazy(() => import("./pages/content"));

const App = () => {
  return (
    <>
    <Suspense fallback={
        <div className="flex justify-center items-center h-[200px]">
            <DNA
              visible={true}
              height={80}
              width={80}
              ariaLabel="dna-loading"
            />
          </div>
    }>
        <Content />
    </Suspense>
    </>
    // <div className='w-full min-h-screen bg-gray-400 text-black flex flex-row justify-evenly items-center '>
    //     <div className='w-100 h-30 border-black border rounded-2xl bg-[#1D1F20]'>

    //     </div>
    //     <div className='w-30 h-30 shadow-2xl border-black border rounded-2xl bg-[#2E3338]'>

    //     </div>
    //     <div className='w-30 h-30 shadow-2xl rounded-2xl bg-[#FFFFFA]'>

    //     </div>
    //     <div className='w-30 h-30 shadow-2xl rounded-2xl bg-[#C7FF39]'>

    //     </div>
    // </div>
  )
}

export default App


// FFFFFA -- Baby powder
// 363537 -- jet // not for use
// #2E3338 -- gunmental
// 1D1F20 -- black
// C7FF39 -- greenish or yellowish 