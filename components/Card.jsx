import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";
const Card = ({results }) => {
  return (
    <div className="max-w-sm  cursor-pointer hover:sm:shadow-lg hover:sm:dark:shadow-slate-500  hover:sm:shadow-purple-400 bg-violet-300  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:opacity-85 hover:dark:opacity-75">
      <Link href={`/movie/${results.id}`}>
        <Image className="rounded-t-lg " src={`https://image.tmdb.org/t/p/original/${results.backdrop_path || results.poster_path || '/about.jpg'}`} alt="" width={500} height={300}  />
      </Link>
      <div className="p-5">
        <Link href={`/movie/${results.id}`}>
          <h5 className="mb-2 line-clamp-1 text-2xl font-bold tracking-tight text-violet-800 dark:text-sky-500">
            {results.original_title || results.original_name}
          </h5>
        </Link>
        <Link href={`/movie/${results.id}`}>
        <p className="mb-3 font-normal text-violet-600 dark:text-sky-700 line-clamp-6 tracking-tighter">
            {results.overview}
        </p>
        </Link>
        <Link href={`/movie/${results.id}`}>
        <div className="flex   text-violet-800 dark:text-sky-500 items-center gap-2">{results.release_date || results.first_air_date}
            <FiThumbsUp className="h-5  ml-2 my-2 mb-3"/>
            {results.vote_count}
        </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
