import React from 'react'

function container({children}) {
  return (
    <div className='flex max-w-7xl flex-col mx-auto content-center min-h-screen justify-center bg-red-500 items-center gap-4'>
      {children}
    </div>
  )
}

export default container
