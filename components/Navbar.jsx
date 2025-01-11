"use client";
import Link from "next/link";
import React, {  useState } from "react";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import DarkModeSwitch from "./DarkModeSwitch";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);



  
  const toggleVisibility = () => {
    
      setIsVisible(!isVisible);
  };
  const closeMenu = () => {
    setIsVisible(false);
  };
  return (
    <nav className="bg-violet-300 border-gray-200 dark:bg-gray-900 font-sans text-lg ">
      <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center space-x-1 rtl:space-x-reverse"
        >
          <img
            src="/Logo1.png"
            className="h-10 rounded-full"
            alt="Logo"
          />
          <span className="self-center font-sans text-2xl font-semibold whitespace-nowrap dark:text-white">
          <span className="font-bold font-serif">M</span>ovie<span className="text-purple-500 font-bold">Hunt</span>
          </span>
        </Link>

        {/* User Actions */}
        <div className="flex items-center justify-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse md:gap-2 ">
        <div className="h-8 rounded-full w-8   sm:mx-1 text-white">
          <DarkModeSwitch/>
        </div>
          <SignedOut>
            <SignInButton className="lg:px-4 lg:py-1 md:px-3 font-serif md:py-1 px-1 py-1 border-2 bg-purple-500 text-white dark:bg-sky-500 hover:bg-purple-600 dark:border-blue-400 border-purple-600 rounded-md hover:opacity-90 hover:border-purple-800 hover:dark:border-blue-600 ease-linear duration-100" />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* Hamburger Menu */}
    

          <button
            onClick={toggleVisibility}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-user"
            aria-expanded={isVisible}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Menu */}
        <div
          className={`${
            isVisible ? "block" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-violet-300 rounded-lg bg-violet-300 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-violet-300 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
              onClick={closeMenu}
                href="/"
                className="block py-2 px-3 text-white bg-violet-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                onClick={closeMenu}
                href="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
