import Image from "next/image";
import React from "react";

const page = async () => {
  return (
    <div className="w-full mt-20">
      <div className="p-4 md:pt-8 flex flex-col lg:flex-row   content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src="/about.jpg"
          alt="About MovieHunt"
          className="rounded-lg sm:ml-14 hover:shadow-purple-600 hover:dark:shadow-slate-400 shadow-lg transition-shadow duration-200 scale-95 hover:scale-100 hover:transition-transform "
          width={500}
          height={300}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        ></Image>
        <div className="p-2">
          <h2 className="text-2xl mb-3 font-sans text-violet-700 dark:text-sky-500 font-bold">
            Discover Your Favorite Movies Instantly
          </h2>
          <p className="text-lg mb-3 tracking-tighter text-violet-600 dark:text-sky-600 ">
            {" "}
            Welcome to MovieHunt, the ultimate platform for movie lovers to
            explore, search, and discover an endless world of films. Whether
            you’re looking for the latest releases, timeless classics, or
            underrated gems, our website makes it easier than ever to find
            exactly what you’re searching for. Dive into detailed movie
            information, including cast and crew, ratings, reviews, trailers,
            genres, and more, all curated to enhance your movie-watching
            experience. With an intuitive search feature and a user-friendly
            interface, MovieHub is designed to save you time and help you make
            informed choices about what to watch next. Start your journey into
            the cinematic universe with MovieHunt{" "}
            <span className="text-violet-700 dark:text-sky-400">
              - your trusted companion for everything movies!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
