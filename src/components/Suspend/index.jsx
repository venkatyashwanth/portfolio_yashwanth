import React from 'react'
// import Count from '../Count/Count';
import { lazy,Suspense } from 'react';
const Count = lazy(() => import('../Count/Count'));



const Hello = () => {
  return <h1>Hello World</h1>
}

const Suspend = () => {
  return (
    <>
      <Hello />
      <Suspense fallback={<p>Loading....</p>}>
        <Count />
      </Suspense>
    </>
  )
}

export default Suspend;