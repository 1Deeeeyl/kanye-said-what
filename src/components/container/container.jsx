import React from 'react'

function container({children}) {
  return (
    <div className='flex max-w-7xl flex-row mx-auto content-center min-h-screen items-center'>
      {children}
    </div>
  )
}

export default container
