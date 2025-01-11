"use client"
import React, { useEffect, useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { useTheme } from 'next-themes';
const DarkModeSwitch = () => {
    const { theme, setTheme ,systemTheme} = useTheme();
    const [mounted , setMounted] = useState(false);
    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(()=>{
        setMounted(true)
    },[])
   
  return (
    <div>
        {mounted && (currentTheme === 'dark' ? (
          <MdLightMode onClick={()=>setTheme('light')} className='text-3xl text-orange-500 transition ease-in-out duration-150 cursor-pointer hover:text-sky-600 text-center'/>
        ) :(
        <MdDarkMode onClick={()=>setTheme('dark')} className='text-3xl text-blue-700 transition ease-in-out duration-150 cursor-pointer hover:text-pink-500 text-center'/>
        ))}
    </div>
  )
} 

export default DarkModeSwitch
