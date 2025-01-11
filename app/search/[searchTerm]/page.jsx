import ApiResults from "@/components/ApiResults";
import React from "react";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

const Page = async ({ params }) => {
  const searchTerm = params.searchTerm;

  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=true`
    );

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = await res.json();
    const results = data.results;

    return (
      <div>
        {/* Content for logged-in users */}
        <SignedIn>
          {results && results.length === 0 && (
            <h1 className="text-center pt-6">No Results Found</h1>
          )}
          {results && <ApiResults results={results} />}
        </SignedIn>

        {/* Content for logged-out users */}
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
        <p>Error fetching movies: {error.message}</p>
      </div>
    );
  }
};

export default Page;
