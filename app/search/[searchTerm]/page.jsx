import ApiResults from '@/components/ApiResults';
import React from 'react'

const page =async ({params}) => {
    const searchTerm =params.searchTerm;
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=true`);
    const data = await res.json();
    const results = data.results;
  return (
    <div>
      {results && results.length === 0 && (
        <h1 className='text-center pt-6'>No Results Found</h1>
      )}
      {results && <ApiResults results={results}/>}
    </div>
  )
}

export default page
