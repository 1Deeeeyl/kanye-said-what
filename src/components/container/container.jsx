import React from 'react'

function container({children}) {
  return (
    <div className='flex max-w-7xl flex-col mx-auto content-center min-h-screen justify-center  items-center gap-10'>
      {children}
    </div>
  )
}

export default container
