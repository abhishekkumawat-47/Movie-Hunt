"use client"
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

const HeaderList = ({title , param}) => {
    const searchParams = useSearchParams();
    const genre= searchParams.get('genre');
  return (
    <div className={`hover:text-purple-700 hover:dark:text-sky-400 ${genre === param ? 'underline underline-offset-8 decoration-4 decoration-purple-700 dark:decoration-sky-500 rounded-md':''}`}>
      <Link href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default HeaderList
