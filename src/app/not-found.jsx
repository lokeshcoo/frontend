import Link from 'next/link';
import React from 'react'

const notFound = () => {
  return (
    <div className='flex h-screen justify-center itmes-center'>
        <div className='h-screen text-center space-y-4'>
            <h1 className=' text-9xl font-bold '>404</h1>
            <h3 className='text-4xl font-bold'>Not Found</h3>
            <Link href ={"/"} className='block bg-black p-3 rounded-xl text-white  '>
                Back to Home
            </Link>
        </div>
    </div>
  )
}

export default notFound;