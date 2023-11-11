import React from 'react'

const page = ({params}:any) => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <h1>Profile</h1>
      <hr />
      <p className='text-4xl'>dynamic page
      
      <span className='p-2 text-black bg-blue-500 rounded ml-4'>{params.id}</span>
       </p>
    </div>
  )
}

export default page
