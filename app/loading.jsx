import Image from 'next/image'
import React from 'react'

const loading = () => {
  return (
    <div className=' flex justify-center items-center mt-20'>
      <Image alt='loading...' src="/loader.gif" width={96} height={96}></Image>
    </div>
  )
}

export default loading
