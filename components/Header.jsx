import React from 'react'
import HeaderList from './HeaderList'

const Header = () => {
  return (
    <div className='flex justify-center text-center items-center py-5 pl-16 dark:text-sky-500 dark:bg-slate-800 w-full gap-10 text-normal md:text-xl text-purple-600 font-bold  bg-purple-300'>
      <HeaderList title="Trending" param="fetchTrending"/>
      <HeaderList title="Top Rated" param="fetchTopRated"/>
    </div>
  )
}

export default Header
