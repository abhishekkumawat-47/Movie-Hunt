// import Image from 'next/image'
// import React from 'react'

// const page =async ({params}) => {
//     const movieId =  params.id
//     const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)
//     const movie = await res.json()
//   return (
//     <div className='w-full mt-20'>
//         <div className='p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6'>
//       <Image src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`}
//         className='rounded-lg '
//         alt="movieImage"
//         width={500}
//         height={300}
//         style={{maxWidth: '100%' , maxHeight: '100%'}}
//       >
//       </Image>
//       <div className="p-2">
//         <h2 className='text-2xl mb-3 font-sans text-violet-700 dark:text-sky-500 font-bold'>{movie.title || movie.name}</h2>
//         <p className='text-lg mb-3 tracking-tighter text-violet-600 dark:text-sky-600 '>{movie.overview}</p>
//         <p className='mb-3 text-violet-700 dark:text-sky-500'><span className='font-semibold text-violet-700 dark:text-sky-500'>Date Released:</span> {movie.release_date || movie.first_air_date}</p>
//         <p className='mb-3 text-violet-700 dark:text-sky-500'><span className='font-semibold text-violet-700 dark:text-sky-500'>Rating:</span>{movie.vote_count}</p>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default page


import Image from "next/image";
import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const Page = async ({ params }) => {
  const movieId = params.id;

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movie details");
    }

    const movie = await res.json();

    return (
      <div>
        {/* Content for signed-in users */}
        <SignedIn>
          <div className="w-full mt-20">
            <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
              <Image
                src={`https://image.tmdb.org/t/p/original/${
                  movie.backdrop_path || movie.poster_path
                }`}
                className="rounded-lg"
                alt="movieImage"
                width={500}
                height={300}
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
              <div className="p-2">
                <h2 className="text-2xl mb-3 font-sans text-violet-700 dark:text-sky-500 font-bold">
                  {movie.title || movie.name}
                </h2>
                <p className="text-lg mb-3 tracking-tighter text-violet-600 dark:text-sky-600">
                  {movie.overview}
                </p>
                <p className="mb-3 text-violet-700 dark:text-sky-500">
                  <span className="font-semibold text-violet-700 dark:text-sky-500">
                    Date Released:
                  </span>{" "}
                  {movie.release_date || movie.first_air_date}
                </p>
                <p className="mb-3 text-violet-700 dark:text-sky-500">
                  <span className="font-semibold text-violet-700 dark:text-sky-500">
                    Rating:
                  </span>{" "}
                  {movie.vote_count}
                </p>
              </div>
            </div>
          </div>
        </SignedIn>

        {/* Content for signed-out users */}
        <SignedOut>
          <div className="flex justify-center items-center flex-col mt-20">
            <h2 className="text-2xl font-semibold text-purple-600 dark:text-sky-500">
              Please Sign In to View Movie Details
            </h2>
            <SignInButton
              className="mt-6 px-6 py-2 bg-purple-500 text-white dark:bg-sky-500 
                        rounded-md hover:bg-purple-600 dark:hover:bg-sky-600"
            >
              Sign In
            </SignInButton>
          </div>
        </SignedOut>
      </div>
    );
  } catch (error) {
    return (
      <div className="text-center pt-6 text-red-500">
        <p>Error fetching movie details: {error.message}</p>
      </div>
    );
  }
};

export default Page;
