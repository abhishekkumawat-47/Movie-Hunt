import ApiResults from "@/components/ApiResults";
import error from "./error";
export default async function Home({ searchParams }) {
  try {
    // Use searchParams directly without awaiting
    const genre = searchParams?.genre || 'fetchTrending';

    // Construct the API endpoint
    const url = `https://api.themoviedb.org/3/${
      genre === 'fetchTopRated' ? 'movie/top_rated' : 'trending/all/week'
    }?api_key=${process.env.API_KEY}&language=en-US&page=1`;
  

    // Log the URL for debugging
    // console.log("API URL:", url);

    // Fetch data from the API
    const res = await fetch(url,{next : {revalidate : 10000}});

    // Handle response errors
    if (!res.ok) {
      throw new error(`API request failed with status ${res.status}`);
    }

    const data = await res.json();
    const results = data.results;
    // console.log("Movie data:", results);

    // Render the data
    return (
      <ApiResults results={results}/>
    );
  } catch (error) {
    // Log errors to the console
    console.error("Error fetching data:", error);
    throw new error;
  }
}
