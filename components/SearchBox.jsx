"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const SearchBox = () => {
    const [search,setSearch] =  useState('');
     const router = useRouter();
    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/search/${search}`)
    }
  return (
    <>
      <form onSubmit={handleSearch} className='flex justify-between px-5 max-w-6xl mx-auto'>
        <input type="text" placeholder='search keywords'  onChange={(e)=>{setSearch(e.target.value)}} className='w-full h-14 rounded-md placeholder-purple-500 text-violet-700 dark:text-sky-500 font-medium dark:placeholder-sky-600 outline-none bg-transparent flex-1 '  />
        <button className="text-purple-800 font-semibold dark:text-sky-500 disabled:text-purple-300" disabled={search === ''} value={search}>Search</button>
      </form>
    </>
  )
}

export default SearchBox
