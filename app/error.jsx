"use client"
import React, { useEffect } from 'react'

const error = ({error,reset}) => {
    useEffect(() => {
      console.error(error)
    
    }, [error])
    
  return (
    <div className='text-center font-serif text-purple-600 dark:text-sky-500 mt-20 text-xl md:text-2xl gap-2 flex flex-col justify-center items-center'>
      <h1>Something went wrong. Please try again later.</h1>
      <button onClick={()=>reset()} className='font-semibold hover:text-purple-800 hover:dark:text-sky-400'>Try Again</button>
    </div>
  )
}

export default error
